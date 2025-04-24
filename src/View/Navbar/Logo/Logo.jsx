import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      
        <Link to="/" class="navbar-brand" href="#">
          <img
            src="https://www.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"
            alt="Bootstrap"
            width="45"
            height="26"
          />
        </Link>
      
    </div>
  );
};
export default Logo;
