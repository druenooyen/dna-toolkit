import "../App.css";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = ({onLogin}) => {
    const navigate = useNavigate();
  return (
    <>
    <LoginForm onLogin={onLogin}/>
    <div className="p-4">
    <h2 className="mb-3 fs-4">Don't have an account?</h2>
    <button onClick={() => navigate("/signup")} className="btn btn-primary">
      Sign Up
    </button> 
    </div>
    </>
    
  );};

export default Login;