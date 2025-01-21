import "./App.css";
import Navbar from "./View/Navbar/Navbar";
import Home from "./View/Home";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Customer from "./View/Navigation/Customer";
import NotFound from "./View/Navigation/NotFound";
import TempComp from "./View/Navigation/TempComp";
import Product from "./View/Navbar/Men/MenProducts";
import MenProducts from "./View/Navbar/Men/MenProducts";
import WomenProduct from "./View/Navbar/Women/WomenProduct";
import KidsProduct from "./View/Navbar/Kids/KidsProduct";
import HomeProduct from "./View/Navbar/HomeAndLiving/HomeProduct";
import BeautyProduct from "./View/Navbar/Beauty/BeautyProduct";
import Login from "./View/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />

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

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/MenProducts" element={<MenProducts />} />
            <Route path="/WomenProduct" element={<WomenProduct />} />
            <Route path="/KidsProduct" element={<KidsProduct />} />
            <Route path="/HomeProduct" element={<HomeProduct />} />
            <Route path="/BeautyProduct" element={<BeautyProduct />} />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Customer/:id/:name" element={<Customer />} /> */}
            {/* dynamic route placeholder "id:" replaced by value in url */}
            {/* <Route path="/Product" element={<Product />} />
            <Route path="/Product/:id" element={<TempComp />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
