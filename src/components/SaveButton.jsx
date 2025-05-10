import React from "react";
import { saveSequence } from "../utils/firebaseUtils";

const SaveButton = ({ user, sequence }) => {
    const handleClick = async () => {
        try {
          await saveSequence(user, sequence);
          alert("Sequence saved!");
        } catch (error) {
          console.error("Failed to save:", error);
          alert("Error saving sequence.");
        }
      };
      
  return (
    <button onClick={handleClick} className="btn btn-secondary mt-2">
      Save Sequence to Account
    </button>
  );
};

export default SaveButton;