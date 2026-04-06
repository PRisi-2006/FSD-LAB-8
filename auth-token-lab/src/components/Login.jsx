const Login = ({ onLogin }) => {

  const handleLogin = () => {
    const fakeToken = "fake-jwt-token-123";

    // Store token in localStorage
    localStorage.setItem("authToken", fakeToken);

    onLogin(); // tell App user is logged in
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;