
const SequenceInput = ({ dnaSequence, onChange }) => {
    return(
    <div className="mb-3">
        <textarea
          className="form-control form-control-lg"
          type="text"
          value={dnaSequence}
          onChange={onChange}
          rows={5}
          placeholder="Enter DNA sequence (A, T, C, G)"
        />
      </div>
    );
}

export default SequenceInput;