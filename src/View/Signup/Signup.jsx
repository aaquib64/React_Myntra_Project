import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

let Signup =() =>{
    return(

        <div className="container mt-5 d-flex justify-content-center">
        <div
          className="card p-4 shadow-lg"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h3 className="text-center mb-3">Sign Up</h3>
          <form className="row g-3">
            {/* Name Field */}
            <div className="col-12">
              <label htmlFor="inputName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Enter your full name"
                required
              />
            </div>
  
            {/* Email Field */}
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter your email"
                required
              />
            </div>
  
            {/* Address Field */}
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                required
              />
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
              <small id="passwordHelpBlock" className="form-text text-muted">
              Your password must be 8-20 characters long and include letters and numbers.
              </small>
            </div>
  
            {/* Submit Button */}
            <div className="col-12">
              <button type="submit" className="btn btn-danger w-100">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
        // <div>
        //     <div className="Body-Container">
        //             {/* <img src="facebook.png" alt="" className="Logo"/> */}
        //         <div className="signup-container">
        //             <div className="Heading-container">
        //                     <h2 className="Heading">Create a new account</h2>
        //                     <span className="Sub-heading">It's quick and easy</span>
        //                     <hr/>

        //             </div>
        //             <div className="Signup-form">
        //                 <div className="Input">
        //                     <div className="Input">
        //                         <div className="Input">
        //                         <input type="text" className="Input-first" placeholder="First name" aria-label="First name"/>
        //                         </div>
        //                         <div  className="Input">
        //                         <input type="text" className="Input-last" placeholder="Last name" aria-label="Last name"/>
        //                     </div>
                        
        //                 </div>
                
        //                 </div>
        //                 <div onclick="SelectDOB (Event)" className="DOB"> 
        //                     <label for="date"> Date of Birth </label>
        //                     <input type="date" id="date" placeholder="Date of Birth" className="DOB-input"/>
        //                 </div>

        //                 <div onclick="SelectGender(event)" className="gender">
        //                     <input type="radio" name="gender" id="male" value="male"/>
        //                     <lable for="male" > Male </lable>
        //                     <input type="radio" name="gender" id="female" value="female"/>
        //                     <lable for="female" > Female </lable>
        //                     <input type="radio" name="gender" id="others" value="others"/>
        //                     <lable for="others" > others </lable>
        //                 </div>

        //                 <div className="phone">
        //                     <input type="email" className="Phone-input" id="floatingInput" placeholder="Mobile number or email address"/>
                            
        //                 </div>
        //                 <div className="Password">
        //                     <input type="password" className="Password-input" id="floatingPassword" placeholder="Password"/>
                        
        //                 </div>

        //                 <a href="#">
        //                     <button className="button-Signup">Sign Up</button>
        //                 </a>
        //             </div>
                    
        //             <Link to="/Login" className="Anchar">Alrady have an account?</Link>

        //         </div>
                
        //     </div>
        // </div>
    )
}
export default Signup;