import { createAuthClient } from "better-auth/client";

export const auth = createAuthClient();

export const handleGitHubLogin = async () => {
  return await auth.signIn.social({
    provider: "github",
  });
};

export default auth;
