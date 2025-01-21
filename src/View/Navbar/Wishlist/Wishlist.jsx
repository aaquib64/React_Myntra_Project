import React from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";

const Wishlist = () =>{
    return(
        <div>
             
                 <li  className="Nav-Tag-Right">
                        <Link className="nav-link active" aria-current="page" href="https://www.myntra.com/wishlist" >Wishlist</Link>
                 </li>
             
        </div>
    )
}

export default Wishlist;