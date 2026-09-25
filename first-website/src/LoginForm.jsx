import "./LoginForm.css";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted username: ", username);
    console.log("Submitted password: ", password);
    console.log("Submitted email: ", email);

    if (username === "admin" && password === "123") {
      setMessage("Login successful!");
      setStatus(true);
    } else {
      setMessage("Login denied!");
      setStatus(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Account Login</h2>

        {/* form for username and password */}
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username..."
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.log("Current username: ", e.target.value);
            }}
          ></input>
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log("Current password: ", e.target.value);
            }}
          ></input>
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email..."
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <button className="submit-btn" type="submit">
          LOGIN
        </button>
        {message && (
          <p className={status ? "success-msg" : "error-msg"}>{message}</p>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
