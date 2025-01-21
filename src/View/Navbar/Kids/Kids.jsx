import React from 'react';
import './Kids.css';
import { Link } from 'react-router-dom';

const Kids = () =>{
    return(
        <div>
             
                 <li className="Nav-Tag-All">
                        <Link to="/KidsProduct" aria-current="page"  className="Anchor-tag">KIDS</Link>
                 </li>
              
        </div>
    )
}
export default Kids;