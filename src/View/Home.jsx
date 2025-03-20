import React from 'react';
import Navbar from './Navbar/Navbar';
import Coupon from "./CouponCard/Coupon";
import SlidingCard from "./SlidingCard/SlidingCard";
import LongCard from "./LongCard/LongCard";
import Category from "./Category/Category";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
       
        <Coupon/>
        <SlidingCard/>
        <LongCard/>
        <Category/>
        <Footer/> 
    </div>
  )
}

export default Home;