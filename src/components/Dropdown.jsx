// create dropdown menu
const Dropdown = ({ selectedOption, onChange }) => {
  return (
    <div>
      <h4 className="dropdown-title">What sequence are you looking for? </h4>
      <div className="dropdown">
        <select
          className="form-select form-select-lg mb-3"
          value={selectedOption}
          onChange={onChange}
        >
          <option value="">Select an Option</option>
          <option value="complement">Complement</option>
          <option value="reverse">Reverse</option>
          <option value="reversecomplement">Reverse Complement</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
