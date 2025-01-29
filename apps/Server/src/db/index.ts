import type { Context } from "hono";
import * as authSchema from "./schema/auth.js";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from 'hono/adapter'


export const createDB = (c: Context) =>{

  const { DATABASE_URL } = env(c)


  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  const sql = neon(DATABASE_URL);
  return drizzle({ client: sql, schema: { ...authSchema } });
};
