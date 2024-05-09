import postgres from "postgres";

const PORT = process.env.SERVER_PORT || 3000;

const sql = postgres();

const [{ version: pgVersion }] = await sql`SELECT version()`;

const server = Bun.serve({
  port: PORT,
  fetch(request) {
    return new Response(`Hello from the server! You're running postgres version: ${pgVersion}`);
  },
});
