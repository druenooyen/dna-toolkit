import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="mx-2">
        <h1 className="section-title">Welcome to your DNA Toolkit</h1>
        <h2 className="fs-3">Your homebase for all genetics tools to support your workflows!</h2>
        <h2 className="fs-3">Select a tool from the navigation bar above to get started.</h2>
      </div>

      <div className="d-flex">
        <div className="p-2 mx-4 my-2 bg-light border box text-center">
          <h2 className="section-title">Sequence Coverter</h2>
          <p>
            Quickly convert your DNA sequence into its complement, reverse, or
            reverse complement strand.
          </p>
        </div>

        <div className="p-2 mx-4 my-2 bg-light border box text-center">
          <h2 className="section-title">Codon Usage</h2>
          <p>
            Calculate codon counts and assess codon frequency to look for bias.
          </p>
        </div>

        <div className="p-2 mx-4 my-2 bg-light border box text-center">
          <h2 className="section-title">Translate</h2>
          <p>
            Translate your DNA sequence into its protein sequence counterpart with
            ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
