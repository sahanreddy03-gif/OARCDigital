import { NextRequest, NextResponse } from "next/server";
import {
  enquiryRequestSchema,
  submitLead,
} from "@/lib/agent-access/leadSubmission";
import {
  getCatalogueService,
  serviceCatalogue,
} from "@/lib/agent-access/catalogue";
import {
  consumeAgentAccessRateLimit,
  firstPlatformAddress,
} from "@/lib/agent-access/rateLimit";

export const runtime = "nodejs";

type JsonRpcId = string | number | null;
type JsonRpcRequest = {
  jsonrpc?: string;
  id?: JsonRpcId;
  method?: string;
  params?: Record<string, unknown>;
};

const MCP_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*",
};

function response(id: JsonRpcId, result: unknown) {
  return { jsonrpc: "2.0", id, result };
}

function errorResponse(id: JsonRpcId, code: number, message: string) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

function enquiryToolResult(value: unknown) {
  const parsed = enquiryRequestSchema.safeParse(value);
  if (!parsed.success || parsed.data.website?.trim()) {
    return {
      isError: true,
      content: [{ type: "text", text: "Invalid enquiry request. Provide name, service and email or contact." }],
    };
  }

  const service = getCatalogueService(parsed.data.service);
  if (!service) {
    return {
      isError: true,
      content: [{ type: "text", text: "Unknown service. Call services.list for available service ids." }],
    };
  }

  return { parsed, service };
}

async function dispatch(request: JsonRpcRequest, ipAddress: string) {
  const id = request.id ?? null;
  if (request.jsonrpc !== "2.0" || typeof request.method !== "string") {
    return errorResponse(id, -32600, "A JSON-RPC 2.0 method is required.");
  }

  if (request.method === "notifications/initialized") return null;

  if (request.method === "initialize") {
    return response(id, {
      protocolVersion: "2024-11-05",
      capabilities: { tools: {} },
      serverInfo: { name: "oarc-agent-access", version: "1.0.0" },
      instructions:
        "Use services.list for public service discovery. Use enquiry.request to submit an enquiry request; it does not book a calendar appointment.",
    });
  }

  if (request.method === "tools/list") {
    return response(id, {
      tools: [
        {
          name: "services.list",
          description: "List OARC services, capabilities and flexible pricing guidance.",
          inputSchema: { type: "object", properties: {}, additionalProperties: false },
        },
        {
          name: "enquiry.request",
          description:
            "Submit a validated enquiry request for human follow-up. This is not a calendar booking.",
          inputSchema: {
            type: "object",
            required: ["name", "service"],
            properties: {
              name: { type: "string", minLength: 1, maxLength: 120 },
              email: { type: "string", format: "email", maxLength: 320 },
              contact: { type: "string", minLength: 3, maxLength: 320 },
              company: { type: "string", maxLength: 160 },
              service: { type: "string", description: "Service id from services.list." },
              theme: { type: "string", maxLength: 160 },
              message: { type: "string", maxLength: 4000 },
              source: { type: "string", maxLength: 120 },
            },
            anyOf: [{ required: ["email"] }, { required: ["contact"] }],
          },
        },
      ],
    });
  }

  if (request.method !== "tools/call") {
    return errorResponse(id, -32601, `Unsupported MCP method: ${request.method}`);
  }

  const toolName = request.params?.name;
  const argumentsValue = request.params?.arguments ?? {};
  if (typeof toolName !== "string") {
    return errorResponse(id, -32602, "tools/call requires a tool name.");
  }

  if (toolName === "services.list") {
    return response(id, {
      content: [{ type: "text", text: JSON.stringify({ services: serviceCatalogue }) }],
      structuredContent: { services: serviceCatalogue },
    });
  }

  if (toolName !== "enquiry.request") {
    return response(id, {
      isError: true,
      content: [{ type: "text", text: `Unknown tool: ${toolName}` }],
    });
  }

  const enquiry = enquiryToolResult(argumentsValue);
  if (!("parsed" in enquiry) || !enquiry.parsed || !enquiry.service) return response(id, enquiry);
  const parsedEnquiry = enquiry.parsed;
  const service = enquiry.service;
  const contact = parsedEnquiry.data.email || parsedEnquiry.data.contact;
  if (!contact) return response(id, enquiryToolResult({}));

  const rate = await consumeAgentAccessRateLimit({
    ipAddress,
    contact,
    service: service.id,
  });
  if (!rate.available) {
    return response(id, {
      isError: true,
      content: [{ type: "text", text: "Enquiry protection is temporarily unavailable. Please try again later." }],
    });
  }
  if (!rate.allowed) {
    return response(id, {
      isError: true,
      content: [{ type: "text", text: "Too many enquiry requests. Please try again later." }],
    });
  }

  const submission = await submitLead({
    name: parsedEnquiry.data.name,
    contact,
    company: parsedEnquiry.data.company,
    service: service.title,
    theme: parsedEnquiry.data.theme || "",
    message:
      parsedEnquiry.data.message ||
      `Enquiry request for ${service.title}${parsedEnquiry.data.theme ? ` — ${parsedEnquiry.data.theme}` : ""}.`,
    source: parsedEnquiry.data.source || "MCP enquiry",
  });

  if (!submission.emailed) {
    return response(id, {
      isError: true,
      content: [{ type: "text", text: "The enquiry request could not be delivered. Please try again." }],
    });
  }

  return response(id, {
    content: [
      {
        type: "text",
        text: JSON.stringify({
          requestType: "enquiry",
          service: { id: service.id, title: service.title },
          confirmation:
            "Enquiry request received for human follow-up; no calendar appointment was booked.",
        }),
      },
    ],
  });
}

export async function GET() {
  return NextResponse.json(
    {
      transport: "JSON-RPC 2.0 over HTTP POST",
      endpoint: "/mcp",
      protocolVersion: "2024-11-05",
      methods: ["initialize", "notifications/initialized", "tools/list", "tools/call"],
      tools: ["services.list", "enquiry.request"],
      note: "enquiry.request creates an enquiry request for human follow-up and does not book a calendar appointment.",
    },
    { headers: MCP_HEADERS },
  );
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      ...MCP_HEADERS,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request: NextRequest) {
  let body: JsonRpcRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(errorResponse(null, -32700, "Request body must be valid JSON."), {
      status: 400,
      headers: MCP_HEADERS,
    });
  }

  let result: ReturnType<typeof errorResponse> | Awaited<ReturnType<typeof dispatch>>;
  try {
    result = await dispatch(
      body,
      firstPlatformAddress(
        request.headers.get("x-forwarded-for"),
        request.headers.get("x-real-ip"),
      ),
    );
  } catch {
    return NextResponse.json(errorResponse(body.id ?? null, -32000, "The MCP request could not be completed."), {
      status: 500,
      headers: MCP_HEADERS,
    });
  }
  if (!result) return new Response(null, { status: 204, headers: MCP_HEADERS });
  return NextResponse.json(result, { headers: MCP_HEADERS });
}
