import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { createMiddleware } from "hono/factory";
import { createAuth } from "@/auth.js";
import { createDB } from "@/db/index.js";

declare module "hono" {
  interface ContextVariableMap {
    db: ReturnType<typeof createDB>;
    auth: ReturnType<typeof createAuth>;
    session: ReturnType<typeof createAuth>["$Infer"]["Session"] | null;
  }
}

const app = new Hono();

const initDB = createMiddleware(async (c, next) => {
  const db = createDB(c);
  c.set("db", db);
  await next();
});

const initAuth = createMiddleware(async (c, next) => {
  const auth = createAuth(c);
  c.set("auth", auth);
  await next();
});

const protectedRoute = createMiddleware(async (c, next) => {
  const auth = c.get("auth");
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (!session) {
    return c.json({ error: "Unauthorized" }, 401);
  } else {
    c.set("session", session);
    await next();
  }
});

app.use("*", initDB);
app.use("*", initAuth);
app.on(["GET", "POST"], "/api/auth/*", (c) =>
  c.get("auth").handler(c.req.raw)
);
app.use("/api/*", protectedRoute);

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
