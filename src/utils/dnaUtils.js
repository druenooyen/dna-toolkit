
export function generateComplementaryStrand(sequence) {
    const complementMap = { A: "T", T: "A", C: "G", G: "C" };

    // Generate complementary strand
    return sequence
      .split("")
      .map((nucleotide) => complementMap[nucleotide])
      .join("");
  };

  export function generateReverseStrand(sequence) {
    return sequence.split("").reverse().join("");
  }

  export function generateReverseComplement(sequence) {
    const complement = generateComplementaryStrand(sequence);
    return generateReverseStrand(complement);
  }

  