
import React from "react";
import "./Coupon.css";
import Capture from "../../Images/Capture.PNG";

const Coupon = () => {
  return (
    <div className="coupon-container">
      <a href="https://www.myntra.com/myntra">
        <img src={Capture} alt="Coupon" className="coupon-img" />
      </a>
    </div>
  );
};

export default Coupon;
