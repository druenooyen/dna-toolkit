import '../App.css';
import React, { useState } from "react";
import {
  generateComplementaryStrand,
  generateReverseStrand,
  generateReverseComplement,
} from "../utils/dnaUtils";

import Dropdown from "../components/Dropdown";
import AlertList from "../components/AlertList";

import { Button, Container } from "react-bootstrap";


const DNAQuickTools = () => {
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
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  // change the input DNA sequence based on the selectedOption
  // shows alert if given sequence is not valid
  const handleAction = () => {
    if (!/^[ATCG]*$/.test(dnaSequence)) {
      showAlert("Sequence must consist of A, T, C and G only!", "danger");
      setResult("");
      return;
    }

    switch (selectedOption) {
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

  return (
    <Container className="container py-4">
      <h2 className="text-center mb-4 title">Quick Tools</h2>
  
      <Dropdown
        selectedOption={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
  
      <AlertList alerts={alerts} onDismiss={dismissAlert} />
  
      <div className="mb-3">
        <input
          className="form-control form-control-lg"
          type="text"
          value={dnaSequence}
          onChange={(e) => setDnaSequence(e.target.value.toUpperCase())}
          placeholder="Enter DNA sequence (A, T, C, G)"
        />
      </div>
  
      <div className="d-grid gap-2">
        <Button
          variant="primary"
          id="generateButton"
          onClick={() => handleAction()}
        >
          Generate
        </Button>
      </div>
  
      {result && <p className="mt-3 result">Output Strand: {result}</p>}
    </Container>
  );
  
};

export default DNAQuickTools;