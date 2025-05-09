
const SequenceInput = ({ dnaSequence, onChange }) => {
    return(
    <div className="mb-3">
        <input
          className="form-control form-control-lg"
          type="text"
          value={dnaSequence}
          onChange={onChange}
          placeholder="Enter DNA sequence (A, T, C, G)"
        />
      </div>
    );
}

export default SequenceInput;