import React from "react";
import './Catogary.css';
import { Link } from "react-router-dom";

const Category = () =>{
    return(
        <div>
             <h2 className="mt-4 ms-3 mb-4 text-center" >SHOP BY CATEGORY</h2>
      <div className="container-fluid mt-4">
  <div className="row g-3 justify-content-center"> {/* Centers cards */}
    {[
      { name: "Men's Wear", discount: "50-70% OFF", img: "http://www.divinestyle.co/wp-content/uploads/2016/01/mens-wrap-around-scarf-in-plaid-with-denim-shirt.jpg" },
      { name: "Women's Wear", discount: "40-80% OFF", img: "https://royalanarkali.com/wp-content/uploads/2021/07/womens-orange-color-full-sequence-diamond-work-party-wear-gown.jpg" },
      { name: "Kid's Wear", discount: "60-80% OFF", img: "https://theopinionatedindian.com/static/c1e/client/86164/uploaded_original/e5f3d12192f6ba56b507bee77ed52ee6.jpg" },
      { name: "Women's Footwear", discount: "85% OFF", img: "https://www.yournextshoes.com/wp-content/uploads/2021/07/Jimmy-Choo-shoes.jpg" },
      { name: "Beauty & Makup", discount: "FLAT 70% OFF", img: "https://skingroom.com/wp-content/uploads/2018/02/makeup-kits.jpg" },
      { name: "Men's Watches", discount: "45-75% OFF", img: "https://www.thewatchblog.co.uk/wp-content/uploads/2016/06/339.jpg" },
      { name: "Men's Activewear", discount: "50-85% OFF", img: "https://i.pinimg.com/originals/e1/09/59/e1095914a0a32fbbe489b196085430d1.jpg" },
      { name: "Women's Activewear", discount: "FLAT 60% OFF", img: "https://umbrasports.com/wp-content/uploads/2020/05/equilibrium-activewear-l750-umbrasports-activewear-fitness-10.jpg" },
      { name: "Grooming", discount: "UPTO 60% OFF", img: "https://c8.alamy.com/comp/AD1X9K/mens-grooming-products-AD1X9K.jpg" },
      { name: "Men's Footwear", discount: "85% OFF", img: "https://www.fashionbeans.com/wp-content/uploads/2018/07/7-shoes-own-top-aquila1.jpg" },
      { name: "Home Decor", discount: "UPTO 55% OFF", img: "https://stylecurator.com.au/wp-content/uploads/2020/08/Bookshelf-dried-floral-arrangement-1239x1536.jpg" },
      { name: "Eyewear", discount: "FLAT 70% OFF", img: "http://eyecarelb.com/assets/images/eyewear.jpg" }
    ].map((brand, index) => (
      <div key={index} className="col-lg-2 col-md-4 col-sm-6 px-2 ms-4 mb-4 "> {/* Equal left & right margin */}
        <div className="card text-white border-0 position-relative rounded-4 " style={{ 
          backgroundImage: `url(${brand.img})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          height: "320px",
        }}>
          <div className="card-body d-flex flex-column align-items-center text-center bg-dark bg-opacity-50 h-100 rounded-4">
            <div className="mt-auto">
              <h5 className="fw-bold">{brand.name}</h5>
              <h6 className="fw-semibold">{brand.discount}</h6>
              <Link to="/productByGender/Men">
              <button className="btn btn-danger btn-sm fw-bold mt-2">SHOP NOW</button>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



        </div>
    )
}
export default Category;