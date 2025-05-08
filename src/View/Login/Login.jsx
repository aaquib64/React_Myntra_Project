
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { loginUser } from "../Utils/api";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");

      try {
        const userData = await loginUser({ email, password });
        login(userData); // From context
      } catch (err) {
        setError(err.message);
      }
    };
  
    //   try {
    //     const userData = await loginUser({email,
    //        password});
    //     login(userData);
    //   } catch (err) {
    //     setError(err);
    //   }
    // };
  
  return (
    <div className="container mt-5 d-flex justify-content-center">
    <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
      <h3 className="text-center mb-3">Login</h3>

      {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
      )}


      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Enter your password"
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            required
          />
          <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long and include letters and numbers.
          </div>
        </div>

        {/* Remember Me Checkbox */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>

        {/* Login Button */}
        <button type="submit" className="btn btn-danger w-100">
          Login
        </button>
      </form>
      <p className="text-center">Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  </div>
   
    
  );
};
export default Login;
