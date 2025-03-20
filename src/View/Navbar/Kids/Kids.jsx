import React from "react";
import "./Kids.css";
import { Link } from "react-router-dom";

const Kids = () => {
  return (
    <div>
      <li className="nav-item">
        <Link to="/productByGender/Kids" className="nav-link active fw-bold text-small" aria-current="page">
          KIDS
        </Link>
      </li>
    </div>
  );
};
export default Kids;
