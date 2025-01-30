//import { handleGitHubLogin } from "../lib/auth";

export const GitHubLoginButton = () => {
  const handleLogin = async () => {
    // 模拟登录成功
    localStorage.setItem('isAuthenticated', 'true');
    // 跳转到首页
    window.location.href = '/dashboard';
    //await handleGitHubLogin();
  };

  return <button onClick={handleLogin}>Login with GitHub</button>;
};
