import react from "react";
import "./Login.css";
import LoginImage from "../../Images/login.PNG";
import { Link } from "react-router-dom";
const Login = () => {
  
  return (
    <div className="container mt-5 d-flex justify-content-center">
    <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
      <h3 className="text-center mb-3">Login</h3>
      <form>
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
    </div>
  </div>
    // <div>
    //     <div className="Login-Container">
    //       <img className="Login-img" src={LoginImage} alt="" />

    //       <h3 className="Login-Heading">Login</h3>
    //       <form>
    //         <div className="mb-3">
    //           <label for="exampleInputEmail1" className="form-label">
    //             Email address
    //           </label>
    //           <input
    //             type="email"
    //             className="form-control"
    //             id="exampleInputEmail1"
    //             aria-describedby="emailHelp"
    //           />
    //           <div id="emailHelp" className="form-text">
    //             We'll never share your email with anyone else.
    //           </div>
    //         </div>
    //         <div className="mb-3">
    //           <label for="exampleInputPassword1" className="form-label">
    //             Password
    //           </label>
    //           <input
    //             type="password"
    //             className="form-control"
    //             id="exampleInputPassword1"
    //           />
    //         </div>

    //         <div className="flex justify-center">
    //           <button type="submit" className="btn btn-danger button-login">
    //             Login
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    
  );
};
export default Login;
