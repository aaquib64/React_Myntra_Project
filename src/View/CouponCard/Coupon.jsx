import React from "react";
import './Coupon.css';
import Capture from '../../Images/Capture.PNG';


const Coupon = () =>{
    return(
        <div>
            <div className="Coupon-Container" >
                <a href="https://www.myntra.com/myntra">
                    <img src={Capture} alt="" width="1200px" className="Coupon-Img"  />
                </a>
                
            </div>
        </div>
    )
}
export default Coupon;