import React from "react";
import { Link } from "react-router-dom";
import './SlidingCard.css';
import card1 from '../../Images/SlidingNew1.PNG';
import Card2 from '../../Images/SlidingNew2.PNG';
import Card3 from '../../Images/SlidingNew3.PNG';
import card4 from '../../Images/SlidingNew4.PNG';

const SlidingCard = () =>{
    return(
            <div>
                <div id="carouselExampleAutoplaying" className="carousel slide Slide-Card" data-bs-ride="carousel"  >
                    <div className="carousel-inner">
                            <Link to="/shop/Women/Bags">
                                 <div className="carousel-item active">
                                        <img src={card1} className="d-block w-100" alt="error"/>
                                 </div>
                            </Link>
                            <Link to="/shop/Men/Activewear">
                                <div className="carousel-item">
                                        <img src={Card2} className="d-block w-100" alt="error"/>
                                </div>
                            </Link>
                            <Link to="/shop/Women/Accessories">
                                <div className="carousel-item">
                                    <img src={Card3} className="d-block w-100" alt="error"/>
                                </div>
                            </Link>
                            <Link to="/shop/Men/Shirt">
                                <div className="carousel-item">
                                     <img src={card4} className="d-block w-100" alt="error"/>
                                </div>
                            </Link>                       
                    </div>                      
               </div>
            </div>
    )
}
export default SlidingCard;