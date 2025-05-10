const EmailPasswordInput = ({ setEmail, setPassword, handleSubmit, buttonName }) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={setEmail} required />
      <input className="mt-3" type="password" placeholder="Password" onChange={setPassword} required />
      <button type="submit" className="mt-3 btn btn-primary mt-2">{buttonName}</button>
    </form>
  );
};

export default EmailPasswordInput;