import React from "react";
import './GrandCard.css';
import GrandCard1 from '../../Images/GRAND-CARD-1.PNG';
import GrandCard2 from '../../Images/GRAND-CARD.PNG';

const GrandCard = () =>{
    return(
            <div>
               <h2 className="Long-Card-Heading">GRAND GLOBAL BRANDS</h2>
                    <div id="carouselExampleAutoplaying" className="carousel slide Long-Card-Container" data-bs-ride="carousel" >
                        <div className="carousel-inner">
                            <a href="https://www.myntra.com/footwear?f=Brand%3AALDO%2CBoohoo%2CCalvin%20Klein%2CMANGO&rawQuery=Footwear">
                                    <div className="carousel-item active">
                                         <img src={GrandCard1} className="d-block w-100" alt="error"/>
                                    </div>
                            </a>
                            <a href="https://www.myntra.com/men-cloth?f=Brand%3AClassic%20Polo%2CMANGO%20MAN%2CNautica%2CU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Denim%20Co.%2CU.S.%20Polo%20Assn.%20Tailored%2CboohooMAN&rawQuery=men%20cloth">
                                    <div className="carousel-item">
                                        <img src={GrandCard2} className="d-block w-100" alt="error"/>
                                    </div>
                            </a>
                        </div>
                    </div>
            </div>
    )
}
export default GrandCard;