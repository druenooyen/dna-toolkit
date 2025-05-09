import "../App.css";
import React, { useState } from "react";
import AlertList from "../components/AlertList";
import SequenceInput from "../components/SequenceInput";
import { Button, Container } from "react-bootstrap";
import { countCodons } from "../utils/dnaUtils";
import { codonTable } from "../utils/codonTable";

const CodonUsage = () => {
  const [dnaSequence, setDnaSequence] = useState("");
  const [result, setResult] = useState("");
  const [alerts, setAlerts] = useState([]);

  const handleAnalyze = () => {
    if (!/^[ATCG]*$/.test(dnaSequence)) {
      showAlert("Sequence must consist of A, T, C and G only!", "danger");
      setResult("");
      return;
    }

    const codonCount = countCodons(dnaSequence);
    const codonTableData = generateCodonTableData(codonCount);
    setResult(codonTableData);
  };

  const generateCodonTable = (codonTableData) => {
    return (
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border p-2">Codon</th>
            <th className="border p-2">Amino Acid</th>
            <th className="border p-2">Count</th>
            <th className="border p-2">Frequency (%)</th>
          </tr>
        </thead>
        <tbody>
          {codonTableData.map(({ codon, aminoAcid, count, frequency }) => (
            <tr key={codon}>
              <td className="border p-2">{codon}</td>
              <td className="border p-2">{aminoAcid}</td>
              <td className="border p-2">{count}</td>
              <td className="border p-2">{frequency.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const generateCodonTableData = (counts) => {
    const totalCodonCount = Object.values(counts).reduce(
      (sum, count) => sum + count,
      0
    );

    return Object.entries(codonTable).map(([codon, aminoAcid]) => {
      const count = counts[codon] || 0;
      const frequency =
        totalCodonCount > 0 ? (count / totalCodonCount) * 100 : 0;
      return { codon, aminoAcid, count, frequency };
    });
  };

  // Show an alert
  const showAlert = (message, type) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message, type }]);
  };

  // Remove an alert
  const dismissAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <Container className="container py-4">
      <h2 className="text-center mb-4 section-title">Codon Usage Calculator</h2>

      <AlertList alerts={alerts} onDismiss={dismissAlert} />

      <SequenceInput
        value={dnaSequence}
        onChange={(e) => setDnaSequence(e.target.value.toUpperCase())}
      />

      <div className="d-grid gap-2">
        <Button
          variant="primary"
          id="generateButton"
          onClick={() => handleAnalyze()}
        >
          Calculate Codon Usage
        </Button>
      </div>

      {result && (
        <p className="mt-3 result">Codon Usage: {generateCodonTable(result)}</p>
      )}
    </Container>
  );
};

export default CodonUsage;
