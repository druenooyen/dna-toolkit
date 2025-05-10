import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import StrandConverter from "./pages/StrandConverter";
import CodonUsage from "./pages/CodonUsage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { UserContext } from "./userContext";


const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, setUser);
      }, []);

      
  return (


    <Router>
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex mb-0">
        <img src="/dna_logo.png" alt="Logo" width="50" height="50" />
          <h2 className="mt-2 title">DNA Toolkit</h2>
          </div>

          <div className="d-flex">
            <Link className="navbar-brand mx-4 hover-text" to="/">
              Home
            </Link>
            <Link className="navbar-brand me-4 hover-text" to="/quicktools">
              Strand Converter
            </Link>
            <Link className="navbar-brand hover-text" to="/codonusage">
              Codon Usage
            </Link>
            <Link className="navbar-brand hover-text" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="container">
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quicktools" element={<StrandConverter user={user} />} />
          <Route path="/codonusage" element={<CodonUsage />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App;
