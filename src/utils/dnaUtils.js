
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
  };

  export function generateReverseComplement(sequence) {
    const complement = generateComplementaryStrand(sequence);
    return generateReverseStrand(complement);
  };

  export function countCodons(dnaSequence) {
    const codonMap = {};

    for (let i = 0; i <= dnaSequence.length - 3; i += 3) {
      const codon = dnaSequence.substring(i, i + 3);

      if (codon.length === 3) {
        codonMap[codon] = ((codonMap[codon] || 0) + 1);
      }
    }

    return codonMap;

  };
  