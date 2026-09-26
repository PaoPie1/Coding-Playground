import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import { useState } from "react";

function App() {
  const [isSigning, setIsSigning] = useState(false);

  return (
    <div>
      {isSigning ? (
        <SignUp onToggle={() => setIsSigning(false)} />
      ) : (
        <LoginForm onToggle={() => setIsSigning(true)} />
      )}
    </div>
  );
}

export default App;
