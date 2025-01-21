import React from "react";
import './Home.css';
import Capture from '../Images/Capture.PNG';
import card1 from '../Images/card1.PNG';
import Card2 from '../Images/Card2.PNG';
import Card3 from '../Images/Card3.PNG';
import card4 from '../Images/card4.PNG';
import Longcard1 from '../Images/Longcard-1.PNG';
import Longcard2 from '../Images/LongCard-2.PNG';
import Longcard3 from '../Images/Longcard-3.PNG';
import Longcard4 from '../Images/Longcard-4.PNG';
import GrandCard1 from '../Images/GRAND-CARD-1.PNG';
import GrandCard2 from '../Images/GRAND-CARD.PNG';
import Image1 from '../Images/1.PNG';
import Image2 from '../Images/2.PNG';
import Image3 from '../Images/3.PNG';
import Image4 from '../Images/4.PNG';
import Image5 from '../Images/5.PNG';
import Image6 from '../Images/6.PNG';
import Image7 from '../Images/7.PNG';
import Image8 from '../Images/8.PNG';
import Image9 from '../Images/9.PNG';
import Image10 from '../Images/10.PNG';
import Image11 from '../Images/11.PNG';
import Image12 from '../Images/12.PNG';
import Image13 from '../Images/13.PNG';
import Image14 from '../Images/14..PNG';
import Image15 from '../Images/15.PNG';
import Image16 from '../Images/16.PNG';
import Image17 from '../Images/17.PNG';
import Image18 from '../Images/18.PNG';
import Image19 from '../Images/19.PNG';
import Image20 from '../Images/20.PNG';
import Image21 from '../Images/21.PNG';
import Image22 from '../Images/22.PNG';
import Image23 from '../Images/23PNG.PNG';
import Image24 from '../Images/24.PNG';
import Image25 from '../Images/25.PNG';
import Image26 from '../Images/26.PNG';
import Image27 from '../Images/27.PNG';
import Image28 from '../Images/28.PNG';
import Image29 from '../Images/29.PNG';
import Image30 from '../Images/30.PNG';
import Image31 from '../Images/31.PNG';
import Image32 from '../Images/32.PNG';
import Image33 from '../Images/33.PNG';
import CouponCard from "./CouponCard/Coupon";
import SlidingCard from "./SlidingCard/SlidingCard";
import LongCard from "./LongCard/LongCard";
import GrandCard from "./GrandCard/GrandCard";
import Category from "./Category/Category";






const Home = () => {
    return(
           <div>
               <div className="Container">
               <CouponCard />
               <SlidingCard />
               <LongCard />
               <GrandCard />
               <Category />


                    {/* <!--Navbar--> */}
                    
    
                            
    
                    {/* <!--Coupon Card--> */}
                    {/* <div className="Coupon-Container" >
                            <a href="https://www.myntra.com/myntra">
                                <img src={Capture} alt="" width="1200px" className="Coupon-Img"  />
                            </a>
    
                    </div> */}
    
                    {/* <!--Sliding Card--> */}
                    {/* <div id="carouselExampleAutoplaying" className="carousel slide Slide-Card" data-bs-ride="carousel"  >
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
                            
                    </div> */}
    
    
                    {/* <!--Long Card--> */}
                    {/* <h2 className="Long-Card-Heading" >MEDAL WORTHY BRANDS TO BAG</h2>
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
                    </div> */}
    
    
                    {/* <!--Grand Card--> */}
                    {/* <h2 className="Long-Card-Heading">GRAND GLOBAL BRANDS</h2>
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
                             */}
                            
    
                    {/* <!--Category--> */}
                    {/* <h2 className="Long-Card-Heading" >SHOP BY CATEGORY</h2>
                    <div className="Category-Container-1">
                                <a href="https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&sort=popularity">
                                    <div className="Category-Container-div" >
                                        <img src={Image1} alt="" className="Category-Img"/>
                                    </div>
                                </a>
                                <a href="https://www.myntra.com/men-casual-wear?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                    <div className="Category-Container-div">
                                        <img src={Image2} alt="" className="Category-Img" />
                                    </div>
                                </a>
                                <a href="https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                    <div className="Category-Container-div">
                                        <img src={Image3} alt="" className="Category-Img"/>
                                    </div>
                                </a>
                                <a href="https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                    <div className="Category-Container-div">
                                        <img src={Image4} alt="" className="Category-Img"/>
                                    </div>
                                </a>
                                <a href="https://www.myntra.com/womens-western-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                                    <div className="Category-Container-div">
                                        <img src={Image5} alt="" className="Category-Img"/>
                                    </div>
                                </a>
                                <a href="https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                    <div className="Category-Container-div">
                                        <img src={Image6} alt="" className="Category-Img"/>
                                    </div>
                                </a>
                    </div>
    
                    <div className="Category-Container-2" >
                            <a href="https://www.myntra.com/loungewear?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image7} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/men-innerwear?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image8} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/lingerie?rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image9} alt="" className="Category-Img" />
                                </div>
                            </a>
                            <a href="https://www.myntra.com/watches?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image10} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/beauty-page-appliances?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image11} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/grooming?f=Brand%3ABeardhood%2CBombay%20Shaving%20Company%2CFoolzy%2CTHE%20MAN%20COMPANY%2CUstraa&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image12} alt="" className="Category-Img"/>
                                </div>
                            </a>
                    </div>
    
                    <div className="Category-Container-2">
                            <a href="https://www.myntra.com/footwear?f=Gender%3Amen%2Cmen%20women&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image13} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/kids?plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image14} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/footwear-new?f=Gender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image15} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/men-accessories?f=Categories%3ABelts%2CWallets&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image16} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/womens-western-wear?f=Categories%3ABlazers%2CCoats%2CJumpsuit%2CShrug%2CTrousers%2CWaistcoat&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image17} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/men-ethnic-wear?plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image18} alt="" className="Category-Img"/>
                                </div>
                            </a>
                    </div>
    
    
                    <div className="Category-Container-2">
                            <a href="https://www.myntra.com/home-furnishing-menu?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image19} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/handbags-and-bags?f=Categories%3AClutches%2CHandbags%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image20} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/gadgets?f=Categories%3AHeadphones%2CSpeakers&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image21} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/women-jewellery?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image22} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/plus-size-all?f=Gender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&sort=new">
                                <div className="Category-Container-div">
                                    <img src={Image23} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/sztori?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&sort=new">
                                <div className="Category-Container-div">
                                    <img src={Image24} alt="" className="Category-Img"/>
                                </div>
                            </a>
                    </div>
    
                    <div className="Category-Container-2">
                            <a href="https://www.myntra.com/watches?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image25} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/loungewear?f=Gender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image26} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/womens-western-wear?f=Categories%3ABlazers%2CCoats%2CJumpsuit%2CShrug%2CTrousers%2CWaistcoat&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image27} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/eyewear?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A80.0_100.0_80.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image28} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/eyewear?f=Gender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image29} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/trolley-bags?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image30} alt="" className="Category-Img"/>
                                </div>
                            </a>
                    </div>
    
                    <div className="Category-Container-2">
                            <a href="https://www.myntra.com/bag?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image31} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/trolley-bags?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0">
                                <div className="Category-Container-div">
                                    <img src={Image32} alt="" className="Category-Img"/>
                                </div>
                            </a>
                            <a href="https://www.myntra.com/flipflops?extra_search_param=isautosuggestentry%3atrue%3a%3aid%3a2297-flipflops">
                                <div className="Category-Container-div">
                                    <img src={Image33} alt="" className="Category-Img"/>
                                </div>
                            </a>
                    </div> */}
    
    
                    {/* <!-- App --> */}
                    <h6 className="App-Heading" >EXPERIENCE MYNTRA APP ON MOBILE</h6>
                    <div className="App-Container" >
                            <a href="https://play.google.com/store/apps/details?id=com.myntra.android">
                            <img src="http://www.pngmart.com/files/10/Get-It-On-Google-Play-PNG-Clipart.png" alt="" className="Playstore-Img" />
                            </a>
                            <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059">
                            <img src="https://vpnnext.com/images/get-on-app-store.png" alt="" className="Appstore-Img" />
                            </a>
                    </div> 

                </div>
                   
            </div>
            
    
           
    )
}
export default Home;