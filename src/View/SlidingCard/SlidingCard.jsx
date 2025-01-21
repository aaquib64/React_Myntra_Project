import React from "react";
import './SlidingCard.css';
import card1 from '../../Images/card1.PNG';
import Card2 from '../../Images/Card2.PNG';
import Card3 from '../../Images/Card3.PNG';
import card4 from '../../Images/card4.PNG';

const SlidingCard = () =>{
    return(
            <div>
                <div id="carouselExampleAutoplaying" className="carousel slide Slide-Card" data-bs-ride="carousel"  >
                    <div className="carousel-inner">
                            <a href="https://www.myntra.com/shop/prebuzz">
                                 <div className="carousel-item active">
                                        <img src={card1} className="d-block w-100" alt="error"/>
                                 </div>
                            </a>
                            <a href="https://www.myntra.com/accessories?f=Brand%3ACaprese%3A%3ACategories%3AClutches%2CHandbags%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A60.0_100.0_60.0%20TO%20100.0">
                                <div className="carousel-item">
                                        <img src={Card2} className="d-block w-100" alt="error"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/mens-apparel?f=Brand%3AU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Denim%20Co.%2CU.S.%20Polo%20Assn.%20Tailored&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                                <div className="carousel-item">
                                    <img src={Card3} className="d-block w-100" alt="error"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/mens-sports-apparel?rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                <div className="carousel-item">
                                     <img src={card4} className="d-block w-100" alt="error"/>
                                </div>
                            </a>                       
                    </div>                      
               </div>
            </div>
    )
}
export default SlidingCard;