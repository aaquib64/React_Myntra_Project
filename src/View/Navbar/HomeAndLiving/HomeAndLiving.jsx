import React from "react";
import "./HomeAndLiving.css";
import { Link } from "react-router-dom";

const HomeAndLiving = () => {
  return (
    <div>
      <li className="nav-item">
        <Link
          to="/shop/Unisex"
          className="nav-link active fw-bold text-small"
          aria-current="page"
        >
          HOME & LIVING
        </Link>
      </li>
    </div>
  );
};
export default HomeAndLiving;
