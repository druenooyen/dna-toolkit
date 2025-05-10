import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import EmailPasswordInput from "./EmailPasswordInput";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCredential.user);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="p-4 rounded">
      <h2 className="mb-3">Log In</h2>
    <EmailPasswordInput setEmail={(e) => setEmail(e.target.value)} setPassword={(e) => setPassword(e.target.value)} handleSubmit={handleLogin} buttonName={"Login"} />
    </div>
  );
};

export default LoginForm;
