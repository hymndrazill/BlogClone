import { Link } from "react-router-dom";
import "./register.css";
export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Type Username.."
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Type Email.."
        />

        <label>password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Type Password.."
        />
        <button className="btn registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
