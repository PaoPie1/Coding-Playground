import "./LoginForm.css";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Account Login</h2>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>

        <button className="submit-btn" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

// import "./LoginForm.css";
// import { useState } from "react";

// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="login-container">
//       <form className="login-form">
//         <h2>Account Login</h2>

//         <div className="input-group">
//           <label>Username</label>
//           <input type="text" placeholder="Enter username..." required></input>
//         </div>

//         <div className="input-group">
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter password..."
//             required
//           ></input>
//         </div>

//         <button className="submit-btn" type="submit">
//           LOGIN
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
