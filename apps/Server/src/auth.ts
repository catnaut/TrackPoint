import type { Context } from "hono";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import type { BetterAuthPlugin } from "better-auth";

export const createAuth: (c: Context) => ReturnType<typeof betterAuth> = (c) =>
  {
    const db = c.get("db")

    if(!db){
      throw new Error("Database not found")
    }

    return betterAuth({
      database: drizzleAdapter(db,{provider: "pg"}),
    socialProviders: {
      github: {
        clientId: c.env.GITHUB_CLIENT_ID,
        clientSecret: c.env.GITHUB_CLIENT_SECRET,
      },
    },
    plugins: [] as BetterAuthPlugin[],
  })

}
