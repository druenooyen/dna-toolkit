import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DNAQuickTools from "./pages/DNAQuickTools";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Router>
        <h3 className="text-left text-muted">Welcome to your</h3>
        <h2 className="mb-4 title">DNA Toolkit</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/quicktools">QuickTools</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quicktools" element={<DNAQuickTools />} />
      </Routes>
    </Router>
  );
}

export default App;

