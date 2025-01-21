import React from "react";
import "./HomeAndLiving.css";
import { Link } from "react-router-dom";

const HomeAndLiving = () =>{
    return(
        <div>
              
                    <li className="Nav-Tag-All">
                        <Link to="/HomeProduct" aria-current="page" className="Anchor-tag">HOME & LIVING</Link>
                    </li>
               
        </div>
    )
}
export default HomeAndLiving;