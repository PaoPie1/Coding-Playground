import "./LoginForm.css";

function LoginForm({ username, setUsername, password, setPassword, onLogin }) {
  return (
    <div className="login-container">
      <form onSubmit={onLogin} className="login-form">
        <h2>Login</h2>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username..."
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            required
          ></input>
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
