import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DNAQuickTools from "./pages/DNAQuickTools";
import CodonUsage from "./pages/CodonUsage";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <h4 className="ms-3 welcome">Welcome to your</h4>
        <h2 className="ms-3 title">DNA Toolkit</h2>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="d-flex">
          <Link className="navbar-brand mx-3" to="/">
            Home
          </Link>
          <Link className="navbar-brand me-3" to="/quicktools">
            Strand Converter
          </Link>
          <Link className="navbar-brand" to="/codonusage">
            Codon Usage
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quicktools" element={<DNAQuickTools />} />
        <Route path="/codonusage" element={<CodonUsage />} />
      </Routes>
    </Router>
  );
};

export default App;
