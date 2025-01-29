import { handleGitHubLogin } from "../lib/auth";

export const GitHubLoginButton = () => {
  const handleLogin = async () => {
    await handleGitHubLogin();
  };

  return <button onClick={handleLogin}>Login with GitHub</button>;
};
