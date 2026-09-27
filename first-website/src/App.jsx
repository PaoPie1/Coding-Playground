import ToDo from "./ToDo";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import { useState } from "react";

function App() {
  const [isSigning, setIsSigning] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // checks if "isLoggedIn" is "true" then it will load the "ToDo" component
  if (isLoggedIn) {
    return <ToDo onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div>
      {isSigning ? (
        <SignUp onToggle={() => setIsSigning(false)} />
      ) : (
        <LoginForm
          // to go to signup
          onToggle={() => setIsSigning(true)}
          // to go to the todo component
          onLogin={() => setIsLoggedIn(true)}
        />
      )}
    </div>
  );
}

export default App;
