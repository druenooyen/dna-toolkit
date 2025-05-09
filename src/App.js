import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DNAQuickTools from "./pages/DNAQuickTools";
import CodonUsage from "./pages/CodonUsage";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Router>
        <h3 className="text-left text-muted">Welcome to your</h3>
        <h2 className="mb-4 title">DNA Toolkit</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <Link className="navbar-brand" to="/quicktools">Strand Converter</Link>
          <Link className="navbar-brand" to="/codonusage">Codon Usage</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quicktools" element={<DNAQuickTools />} />
        <Route path="/codonusage" element={<CodonUsage />} />
      </Routes>
    </Router>
  );
}

export default App;

