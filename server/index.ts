import { spawn } from "node:child_process";

const isProd = process.env.NODE_ENV === "production";
const cmd = isProd ? ["start"] : ["dev"];
const child = spawn("npx", ["next", ...cmd], { stdio: "inherit", env: process.env });
child.on("exit", (code) => process.exit(code ?? 0));
