import React from "react";
import "./Beauty.css";
import { Link } from "react-router-dom";

const Beauty = () =>{
    return(
        <div>
              
                    <li className="Nav-Tag-All">
                        <Link to="/BeautyProduct" aria-current="page" className="Anchor-tag">BEAUTY</Link>
                    </li>
             
        </div>
    )
}
export default Beauty;