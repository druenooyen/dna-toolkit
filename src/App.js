import React, { useState } from "react";
import {
  generateComplementaryStrand,
  generateReverseStrand,
  generateReverseComplement,
} from ".//dnaUtils";

import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const DNAComplementApp = () => {
  const [dnaSequence, setDnaSequence] = useState("");
  const [result, setResult] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [alerts, setAlerts] = useState([]); 


    // Add alert to the list
    const showAlert = (message, type) => {
        const id = Date.now();
        setAlerts((prev) => [...prev, { id, message, type }]);
      };
    
      // Remove an alert
      const dismissAlert = (id) => {
        setAlerts((prev) => prev.filter(alert => alert.id !== id));
      };

  const handleAction = (action) => {

    if (!/^[ATCG]*$/.test(dnaSequence)) {
      showAlert('Sequence must consist of A, T, C and G only!', 'danger');
      setResult("");
      return;
    }

    switch (action) {
      case "complement":
        setResult(generateComplementaryStrand(dnaSequence));
        break;
      case "reverse":
        setResult(generateReverseStrand(dnaSequence));
        break;
      case "reversecomplement":
        setResult(generateReverseComplement(dnaSequence));
        break;
      default:
        setResult("");
    }
  };

  const Dropdown = () => {
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
        <div>
        <label>What sequence are you looking for? </label>
      <div class="dropdown">
        <select value={selectedOption} onChange={handleChange}>
          <option value="">Select an Option</option>
          <option value="complement">Complement</option>
          <option value="reverse">Reverse</option>
          <option value="reversecomplement">Reverse Complement</option>
        </select>
      </div>
      </div>
    );
  };

  return (
    <Container>
        <h3 className="welcome-title">Welcome to your</h3>
      <h2 className="title">DNA Toolkit</h2>
      <Dropdown />

      <div>
  {alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.type} alert-dismissible`} role="alert">
      <div>{alert.message}</div>
      <button
        type="button"
        className="btn-close"
        onClick={() => dismissAlert(alert.id)}
        aria-label="Close"
      ></button>
    </div>
  ))}
</div>

      <input
        class = "mb-3"
        type="text"
        value={dnaSequence}
        onChange={(e) => setDnaSequence(e.target.value.toUpperCase())}
        placeholder="Enter DNA sequence (A, T, C, G)"
      />
      <Button className="mt-5" variant="primary" id="generateButton" onClick={() => handleAction(selectedOption)}>Generate</Button>
{/* 
      {error && <p className="error">{error}</p>} */}
      {result && <p className="result">Output Strand: {result}</p>}
    </Container>
  );
};

export default DNAComplementApp;
