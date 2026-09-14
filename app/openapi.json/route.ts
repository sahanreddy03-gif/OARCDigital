import { NextResponse } from "next/server";
import { serviceCatalogue } from "@/lib/agent-access/catalogue";

export const runtime = "nodejs";

const openApi = {
  openapi: "3.1.0",
  info: {
    title: "OARC Digital Agent Access API",
    version: "1.0.0",
    description:
      "Public service discovery and enquiry-request contracts. Pricing is scoped to fit; POST /api/book never books a calendar appointment.",
  },
  servers: [{ url: "https://oarcdigital.com" }],
  paths: {
    "/api/services": {
      get: {
        operationId: "listServices",
        summary: "List public services and pricing guidance",
        responses: {
          "200": {
            description: "Public service catalogue",
            content: { "application/json": { schema: { $ref: "#/components/schemas/ServicesResponse" } } },
          },
        },
      },
    },
    "/api/book": {
      post: {
        operationId: "requestEnquiry",
        summary: "Submit an enquiry request",
        description:
          "Validates and rate-limits a request, then delivers it through OARC's existing lead notification path. It does not create a calendar booking.",
        requestBody: {
          required: true,
          content: { "application/json": { schema: { $ref: "#/components/schemas/EnquiryRequest" } } },
        },
        responses: {
          "201": { description: "Enquiry request received for human follow-up" },
          "400": { description: "Invalid input or unknown service" },
          "429": { description: "Rate limit exceeded" },
          "502": { description: "Notification delivery failed" },
        },
      },
    },
    "/mcp": {
      post: {
        operationId: "mcpJsonRpc",
        summary: "MCP-compatible JSON-RPC transport",
        description:
          "POST JSON-RPC 2.0 requests for initialize, tools/list and tools/call. Available tools are services.list and enquiry.request.",
        requestBody: {
          required: true,
          content: { "application/json": { schema: { $ref: "#/components/schemas/JsonRpcRequest" } } },
        },
        responses: { "200": { description: "JSON-RPC response" } },
      },
      get: {
        operationId: "mcpInfo",
        summary: "Describe the MCP JSON transport",
        responses: { "200": { description: "Transport information" } },
      },
    },
  },
  components: {
    schemas: {
      EnquiryRequest: {
        type: "object",
        required: ["name", "service"],
        properties: {
          name: { type: "string", minLength: 1, maxLength: 120 },
          email: { type: "string", format: "email", maxLength: 320 },
          contact: { type: "string", minLength: 3, maxLength: 320 },
          company: { type: "string", maxLength: 160 },
          service: { type: "string", description: "Use a service id from GET /api/services." },
          theme: { type: "string", maxLength: 160 },
          message: { type: "string", maxLength: 4000 },
          source: { type: "string", maxLength: 120 },
        },
        anyOf: [{ required: ["email"] }, { required: ["contact"] }],
      },
      Service: {
        type: "object",
        required: ["id", "title", "path", "description", "pricing"],
        properties: {
          id: { type: "string" },
          title: { type: "string" },
          shortTitle: { type: "string" },
          path: { type: "string" },
          description: { type: "string" },
          audience: { type: "array", items: { type: "string" } },
          capabilities: { type: "array", items: { type: "string" } },
          pricing: { type: "object", additionalProperties: { type: "string" } },
          enquiryThemes: { type: "array", items: { type: "string" } },
        },
      },
      ServicesResponse: {
        type: "object",
        required: ["version", "services"],
        properties: {
          version: { type: "string" },
          publisher: { type: "string" },
          pricingNote: { type: "string" },
          services: { type: "array", items: { $ref: "#/components/schemas/Service" } },
        },
      },
      JsonRpcRequest: {
        type: "object",
        required: ["jsonrpc", "method"],
        properties: {
          jsonrpc: { const: "2.0" },
          id: { oneOf: [{ type: "string" }, { type: "integer" }, { type: "null" }] },
          method: { type: "string" },
          params: { type: "object" },
        },
      },
    },
  },
  "x-oarc-catalogue-count": serviceCatalogue.length,
};

export function GET() {
  return NextResponse.json(openApi, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
    },
  });
}
