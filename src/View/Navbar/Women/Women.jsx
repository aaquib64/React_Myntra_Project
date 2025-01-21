import React from "react";
import './Women.css';
import { Link } from "react-router-dom";

const Women = () =>{
    return(
        <div>
             
                <li className="Nav-Tag-All" >
                    <Link to="/WomenProduct" aria-current="page" className="Anchor-tag">WOMEN</Link>
                </li>
                  
        </div>
    )
}
export default Women;