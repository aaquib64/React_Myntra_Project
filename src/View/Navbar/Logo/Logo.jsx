import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () =>{
    return(
        <div>
                <li>
                    <Link to="/" className="Nav-icon" >
                            <img src="https://www.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"  alt="Bootstrap" width="60" height="33"/>
                    </Link>
                </li>    
        </div>
    )
}
export default Logo;