import React from "react";
import "./Beauty.css";
import { Link } from "react-router-dom";

const Beauty = () => {
  return (
    <div>
      <li className="nav-item">
        <Link
          to="/getAllRestaurantByGender/Beauty"
          className="nav-link active fw-bold text-small"
          aria-current="page"
        >
          BEAUTY
        </Link>
      </li>
    </div>
  );
};
export default Beauty;
