import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// import './App.css';

// // 1. The Parent Component
// function App() {
//   return (
//     <>
//       <h2>Meet Our Team</h2>
//       {/* Passing TWO props: 'name' and 'role' */}
//       <UserProfile name="Alice" role="Software Engineer" />
//       <UserProfile name="Bob" role="Graphic Designer" />
//       <UserProfile name="Charlie" role="Project Manager" />
//     </>
//   )
// }

// // 2. The Child Component
// function UserProfile({ name, role }) {
//   return (
//     <div className="profile-card">
//       {/* Injecting the props into the HTML */}
//       <h3>{name}</h3>
//       <p>Job Title: {role}</p>
//       <hr />
//     </div>
//   )
// }

// export default App;

// import { useState } from 'react';
// import './App.css';

// function App() {
//   // 1. Create a state variable to hold the input text
//   // 'text' stores the value, 'setText' is the function that updates it
//   const [text, setText] = useState("");

//   // 2. This function runs every time the user types a letter
//   function handleChange(event) {
//     setText(event.target.value); // Grabs whatever is currently in the box and updates state
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Type something below:</h2>

//       {/* 3. Connect the input to state and the change handler */}
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Type here..."
//       />

//       {/* 4. Show the live data being automated/captured */}
//       <p>You are typing: <strong>{text}</strong></p>
//     </div>
//   );
// }

// export default App;
