import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import EmailPasswordInput from "./EmailPasswordInput";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // EFFECT: sign up user upon form submission
  const handleSignUp = async (e) => {
    // prevent full page refresh upon form submission
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Account created successfully!");

      // clear state variables after successful user sign up
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 rounded">
      <h2 className="mb-3">Sign Up</h2>
      <EmailPasswordInput setEmail={(e) => setEmail(e.target.value)} setPassword={(e) => setPassword(e.target.value)} handleSubmit={handleSignUp} buttonName={"Sign Up"} />
        {error && <p className="text-danger mt-3">{error}</p>}
        {success && <p className="text-success mt-3">{success}</p>}
    </div>
  );
};

export default SignUpForm;
