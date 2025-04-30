import React, { useState } from "react";
import {
  generateComplementaryStrand,
  generateReverseStrand,
  generateReverseComplement,
} from ".//dnaUtils";

const DNAComplementApp = () => {
  const [dnaSequence, setDnaSequence] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  // returns true if input invalid
  const validateInput = (sequence) => {
    return !/^[ATCG]*$/.test(sequence.toUpperCase());
  };

  const handleAction = (action) => {
    setDnaSequence(dnaSequence.toUpperCase());

    if (validateInput(dnaSequence)) {
      setError("Invalid input! Only A, T, C, and G are allowed.");
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
        <label>Select an option: </label>
        <select value={selectedOption} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="complement">Complement</option>
          <option value="reverse">Reverse</option>
          <option value="reversecomplement">Reverse Complement</option>
        </select>
        <p>You selected: {selectedOption}</p>
      </div>
    );
  };

  return (
    <div className="container">
      <h2 className="title">DNA Toolkit</h2>
      <Dropdown />
      <input
        type="text"
        value={dnaSequence}
        onChange={(e) => setDnaSequence(e.target.value)}
        placeholder="Enter DNA sequence (A, T, C, G)"
      />
      <button onClick={() => handleAction(selectedOption)}>Generate</button>
      {error && <p className="error">{error}</p>}
      {result && <p className="result">Output Strand: {result}</p>}
    </div>
  );
};

export default DNAComplementApp;
