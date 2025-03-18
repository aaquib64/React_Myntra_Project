import React from "react";
import "./Men.css";
import { Link } from "react-router-dom";
const Men = () => {
  return (
    <div>
      <li className="nav-item breadcrumb-item">
        <Link
          to="/Men"
          className="nav-link active fw-bold text-small"
          aria-current="page"
        >
          MEN
        </Link>
      </li>
    </div>
  );
};
export default Men;
