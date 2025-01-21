import React from "react";
import Product from "../Header/Product";
import Image1 from '../../Images/1.PNG';

const MensWear = () =>{
    return(
        <div>
             <div className="Category-Container-1">
                <a href="" onClick={Product} >
                    <div className="Category-Container-div" >
                        <img src={Image1} alt="" className="Category-Img"/>
                    </div>
                    
                </a>
            </div>
        </div>
    )
}
export default MensWear;