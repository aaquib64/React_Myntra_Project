import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo/Logo";
import Men from "./Men/Men";
import Women from "./Women/Women";
import Kids from "./Kids/Kids";
import HomeAndLiving from "./HomeAndLiving/HomeAndLiving";
import Beauty from "./Beauty/Beauty";

let Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary py-3">
        <div className="container-fluid">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4 gap-3">
              <Men />
              <Women />
              <Kids />
              <HomeAndLiving />
              <Beauty />
            </ul>
            <form className="d-flex align-items-center w-50" role="search">
              <div className="input-group flex-grow-1">
                <span
                  className="input-group-text bg-white border-end-0"
                  id="basic-addon1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0,0,256,256"
                  >
                    <g transform="scale(9.84615,9.84615)">
                      <path d="M10,0.1875c-5.42187,0 -9.8125,4.39063 -9.8125,9.8125c0,5.42188 4.39063,9.8125 9.8125,9.8125c2.28906,0 4.39453,-0.80859 6.0625,-2.125l0.875,0.875c-0.36719,0.69141 -0.23828,1.57422 0.34375,2.15625l4.59375,4.625c0.71484,0.71484 1.87891,0.71484 2.59375,0l0.875,-0.875c0.71484,-0.71484 0.71484,-1.87891 0,-2.59375l-4.625,-4.59375c-0.58594,-0.58594 -1.46484,-0.6875 -2.15625,-0.3125l-0.875,-0.875c1.32422,-1.67187 2.125,-3.79297 2.125,-6.09375c0,-5.42187 -4.39062,-9.8125 -9.8125,-9.8125zM10,2c4.41797,0 8,3.58203 8,8c0,4.41797 -3.58203,8 -8,8c-4.41797,0 -8,-3.58203 -8,-8c0,-4.41797 3.58203,-8 8,-8zM4.9375,7.46875c-0.51562,0.83594 -0.8125,1.82031 -0.8125,2.875c0,3.02734 2.44141,5.46875 5.46875,5.46875c1.16797,0 2.26563,-0.37891 3.15625,-1c-0.23828,0.02734 -0.50391,0.03125 -0.75,0.03125c-3.91406,0 -7.0625,-3.14844 -7.0625,-7.0625c0,-0.10547 -0.00391,-0.20703 0,-0.3125z"></path>
                    </g>
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 w-80"
                  placeholder="Search for product, brand, and more"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </div>

              <Link to="/login" className="btn btn-danger ms-3" role="button">
                Login
              </Link>
              <Link to="/signup" className="btn btn-danger ms-2" role="button">
                Signup
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
