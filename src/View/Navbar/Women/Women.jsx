import React from "react";
import "./Women.css";
import { Link } from "react-router-dom";

const Women = () => {
  return (
    <div>
      <li className="nav-item">
        <Link
          to="/getAllRestaurantByGender/Women"
          className="nav-link active fw-bold text-small"
          aria-current="page"
        >
          WOMEN
        </Link>
      </li>
    </div>
  );
};
export default Women;
