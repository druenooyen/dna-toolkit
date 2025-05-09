import React from "react";

const CopyButton = ({ textToCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert("Copied to clipboard!"))
      .catch(err => alert("Failed to copy: ", err));
  };

  return (
    <button onClick={handleCopy} className="btn btn-secondary mt-2">
      Copy Output
    </button>
  );
};

export default CopyButton;
