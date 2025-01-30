import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
  const { event } = await c.req.json();
  const db = c.get("db");
  const result = await db.insert("events").values(event).execute();
  return c.json(result);
});

export default app;
