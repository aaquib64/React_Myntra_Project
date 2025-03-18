import "./App.css";
import Navbar from "./View/Navbar/Navbar";
import Home from "./View/Home";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Products from "./View/Components/Products";
import ProductsByGender from "./View/Components/ProductsByGender";
import ProductsByName from "./View/Components/ProductByName";
import Login from "./View/Login/Login";
import Signup from "./View/Signup/Signup";
import ProductDetails from "./View/Components/ProductDetails";
import Coupon from "./View/CouponCard/Coupon";
import SlidingCard from "./View/SlidingCard/SlidingCard";
import LongCard from "./View/LongCard/LongCard";
import Category from "./View/Category/Category";
import Footer from "./View/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        {/* <Restaurants/> */}
        {/* <RestaurantById/> */}
       <Navbar/>
     
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:names" element={<ProductsByName />} />
          <Route path="/:gender" element={<ProductsByGender />}/>
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
      </Router>
      
      {/* <UseEffect/> */}
      {/* <Counter4/> */}
      {/* <Restro/> */}
      {/* <Counter2/> */}
      {/* <NewsAPI/> */}
       {/* <Title2/> */}
      {/* <Title2/>  */}
      {/* <TodoAxios /> */}
      {/* <TodoList/> */}
      {/* <StateObject/>
      <Counter1/>
      <Counter2/> */}
      {/* <Router>
      
        <Navbar /> */}
        {/* <ul>
            <button type="button">
              <li>
               
                <Link to="/"> Home </Link>{" "}
              </li>
            </button>
            <button type="button">
              <li>
                {" "}
                <Link to="/Customer"> Customer </Link>{" "}
              </li>
            </button>
            <button type="button">
              <li>
                {" "}
                <Link to="/Product"> Product </Link>{" "}
              </li>
            </button>
          </ul> */}
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/MenProducts" element={<MenProducts />} />
          <Route path="/WomenProduct" element={<WomenProduct />} />
          <Route path="/KidsProduct" element={<KidsProduct />} />
          <Route path="/HomeProduct" element={<HomeProduct />} />
          <Route path="/BeautyProduct" element={<BeautyProduct />} />
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Signup" element={<Signup />} /> */}
          
          
          {/* <Router>
          
            <Product/>
            <TempComp/>
            
          <Routes>
          <Route path="/Customer/:id/:name" element={<Customer />} /> */}
          {/* dynamic route placeholder "id:" replaced by value in url */}
          {/* <Route path="/Product" element={<Product />} />
            <Route path="/Product/:id" element={<TempComp />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
          </Router> */}
        {/* </Routes>
      </Router> */}
    </div>
   
    
    
  );
}
export default App;
