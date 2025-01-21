import React from "react";
import "./Studio.css";
import { Link } from "react-router-dom";

const Studio = () =>{
    return(
        <div>
              
                   <li  className="Nav-Tag-All">
                        <Link  aria-current="page" href="https://www.myntra.com/studio/home" className="Anchor-tag">STUDIO</Link>
                   </li>
             
        </div>
    )
}
export default Studio;