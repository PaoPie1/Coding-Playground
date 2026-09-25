import "./LoginForm.css";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted username: ", username);
    console.log("Submitted password: ", password);

    if (username === "admin" && password === "123") {
      console.log("Login successful!");
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
            type="text"
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
      </form>
    </div>
  );
}

export default LoginForm;

// 2NDDDDD DRAFYTTTTTTT

// import "./LoginForm.css";
// import { useState } from "react";

// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Username: ", username);
//     console.log("Submitted Password", password);
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Account Login</h2>

//         <div className="input-group">
//           <label>Username</label>
//           <input
//             type="text"
//             placeholder="Enter username..."
//             value={username}
//             onChange={(e) => {
//               setUsername(e.target.value);
//               console.log("Current username: ", e.target.value);
//             }}
//             required
//           ></input>
//         </div>

//         <div className="input-group">
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter password..."
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               console.log("Current password: ", e.target.value);
//             }}
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
//
//

///
//
//
//
// 1STT DRAFTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
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
