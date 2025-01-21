import React from "react";
import "./SearchBar.css";
const SearchBar = () =>{
    return(
        <div>
             
                  <li className="Navbar-Searchbar-tag">
                        <a> 
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="15" viewBox="0,0,256,256"  className="Navbar-Searchbar-icon" >
                                   <g fill-opacity="0.6902" fill="#1b1818" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(9.84615,9.84615)"><path d="M10,0.1875c-5.42187,0 -9.8125,4.39063 -9.8125,9.8125c0,5.42188 4.39063,9.8125 9.8125,9.8125c2.28906,0 4.39453,-0.80859 6.0625,-2.125l0.875,0.875c-0.36719,0.69141 -0.23828,1.57422 0.34375,2.15625l4.59375,4.625c0.71484,0.71484 1.87891,0.71484 2.59375,0l0.875,-0.875c0.71484,-0.71484 0.71484,-1.87891 0,-2.59375l-4.625,-4.59375c-0.58594,-0.58594 -1.46484,-0.6875 -2.15625,-0.3125l-0.875,-0.875c1.32422,-1.67187 2.125,-3.79297 2.125,-6.09375c0,-5.42187 -4.39062,-9.8125 -9.8125,-9.8125zM10,2c4.41797,0 8,3.58203 8,8c0,4.41797 -3.58203,8 -8,8c-4.41797,0 -8,-3.58203 -8,-8c0,-4.41797 3.58203,-8 8,-8zM4.9375,7.46875c-0.51562,0.83594 -0.8125,1.82031 -0.8125,2.875c0,3.02734 2.44141,5.46875 5.46875,5.46875c1.16797,0 2.26563,-0.37891 3.15625,-1c-0.23828,0.02734 -0.50391,0.03125 -0.75,0.03125c-3.91406,0 -7.0625,-3.14844 -7.0625,-7.0625c0,-0.10547 -0.00391,-0.20703 0,-0.3125z"></path></g></g>
                            </svg>
                        </a>
                        
                        <input  type="search" placeholder="Search for product,brand and more" aria-label="Search" className="Navbar-Searchbar-input" />
                  </li>
            
        </div>
    )
}
export default SearchBar;