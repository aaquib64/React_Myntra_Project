import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

let Signup =() =>{
    return(
        <div>
            <div className="Body-Container">
                    {/* <img src="facebook.png" alt="" className="Logo"/> */}
                <div className="signup-container">
                    <div className="Heading-container">
                            <h2 className="Heading">Create a new account</h2>
                            <span className="Sub-heading">It's quick and easy</span>
                            <hr/>

                    </div>
                    <div className="Signup-form">
                        <div className="Input">
                            <div className="Input">
                                <div className="Input">
                                <input type="text" className="Input-first" placeholder="First name" aria-label="First name"/>
                                </div>
                                <div  className="Input">
                                <input type="text" className="Input-last" placeholder="Last name" aria-label="Last name"/>
                            </div>
                        
                        </div>
                
                        </div>
                        <div onclick="SelectDOB (Event)" className="DOB"> 
                            <label for="date"> Date of Birth </label>
                            <input type="date" id="date" placeholder="Date of Birth" className="DOB-input"/>
                        </div>

                        <div onclick="SelectGender(event)" className="gender">
                            <input type="radio" name="gender" id="male" value="male"/>
                            <lable for="male" > Male </lable>
                            <input type="radio" name="gender" id="female" value="female"/>
                            <lable for="female" > Female </lable>
                            <input type="radio" name="gender" id="others" value="others"/>
                            <lable for="others" > others </lable>
                        </div>

                        <div className="phone">
                            <input type="email" className="Phone-input" id="floatingInput" placeholder="Mobile number or email address"/>
                            
                        </div>
                        <div className="Password">
                            <input type="password" className="Password-input" id="floatingPassword" placeholder="Password"/>
                        
                        </div>

                        <a href="#">
                            <button className="button-Signup">Sign Up</button>
                        </a>
                    </div>
                    
                    <Link to="/Login" className="Anchar">Alrady have an account?</Link>

                </div>
                
            </div>
        </div>
    )
}
export default Signup;