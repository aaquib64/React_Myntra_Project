import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () =>{
    return(
        <div>
             
                 <li  className="Nav-Tag-Right">
                        <Link to="/Login" className="nav-link active" aria-current="page" >Profile</Link>
                 </li>
             
        </div>
    )
}

export default Profile;