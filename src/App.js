import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DNAQuickTools from "./pages/DNAQuickTools";
import CodonUsage from "./pages/CodonUsage";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h2 className="ms-3 mb-0 title">DNA Toolkit</h2>

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
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quicktools" element={<DNAQuickTools />} />
          <Route path="/codonusage" element={<CodonUsage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
