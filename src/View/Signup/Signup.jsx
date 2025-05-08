import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { signupUser } from "../Utils/api";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userData = await signupUser({
        name,
        email,
        address,
        password
      });
            login(userData);
    } catch (err) {
      setError(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-3">Sign Up</h3>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="row g-3">
          {/* Name Field */}
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Address Field */}
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              name="address"
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <small id="passwordHelpBlock" className="form-text text-muted">
              Your password must be 8-20 characters long and include letters and
              numbers.
            </small>
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-danger w-100">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
