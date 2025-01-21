import React from "react";
import "./Men.css";
import { Link } from "react-router-dom";
const Men = () =>{
    return(
        <div>
            
               <li  className="Nav-Tag-1">
                    <Link to="/MenProducts" aria-current="page"  className="Anchor-tag"> MEN </Link>
               </li>
             
        </div>
    )
}
export default Men;