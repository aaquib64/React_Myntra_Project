import React from "react";
import "./Bag.css";
import { Link } from "react-router-dom";

const Bag = () =>{
    return(
        <div>
             
                 <li className="Nav-Tag-Right">
                     <Link className="nav-link active" aria-current="page" href="https://www.myntra.com/checkout/cart">Bag</Link>
                 </li>
             
        </div>
    )
}

export default Bag;