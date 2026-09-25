import "./SignUp.css";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

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

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            required
            placeholder="Enter a username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter a password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}

export default SignUp;
