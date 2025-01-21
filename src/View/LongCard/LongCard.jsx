import React from "react";
import './Longcard.css';
import Longcard1 from '../../Images/Longcard-1.PNG';
import Longcard2 from '../../Images/LongCard-2.PNG';
import Longcard3 from '../../Images/Longcard-3.PNG';
import Longcard4 from '../../Images/Longcard-4.PNG';

const LongCard = () =>{
    return(
            <div>
                <h2 className="Long-Card-Heading" >MEDAL WORTHY BRANDS TO BAG</h2>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"  >
                            <div className="carousel-inner">
                                <a href="https://www.myntra.com/saree?f=Categories%3ASarees&rf=Discount%20Range%3A85.0_100.0_85.0%20TO%20100.0&sort=popularity">  
                                    <div className="carousel-item active">
                                        <img src={Longcard1} className="d-block w-100" alt="error"/>
                                    </div>
                                </a>
                                <a href="https://www.myntra.com/men-footwear?f=Brand%3AU.S.%20Polo%20Assn.%3A%3ACategories%3ACasual%20Shoes%2CSports%20Shoes&rf=Price%3A999.0_3999.0_999.0%20TO%203999.0">
                                    <div className="carousel-item">
                                        <img src={Longcard2} className="d-block w-100" alt="error"/>
                                    </div>
                                </a>
                                <a href="https://www.myntra.com/men?f=Brand%3AArrow%2CArrow%20New%20York%2CBeyours%2CMarks%20%26%20Spencer%2CPeter%20England%3A%3ACategories%3AJeans%2CShirts%2CSweatshirts%2CTrousers%2CTshirts&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                                    <div className="carousel-item">
                                        <img src={Longcard3} className="d-block w-100" alt="error"/>
                                    </div>
                                </a>
                                <a href="https://www.myntra.com/apparel?f=Brand%3ABRAVE%20SOUL%2CLC%20Waikiki%2CNEXT%2CboohooMAN%2Ccatch%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0&sort=new">
                                    <div className="carousel-item">
                                        <img src={Longcard4} className="d-block w-100" alt="error"/>
                                    </div>
                                </a>
                            </div>
                    </div>
            </div>
    )
}
export default LongCard;