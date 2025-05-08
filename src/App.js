import "./App.css";
import Navbar from "./View/Navbar/Navbar";
import Home from "./View/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Products from "./View/Components/Products";
import ProductsByGender from "./View/Components/ProductsByGender";
import ProductsByName from "./View/Components/ProductByName";
import Login from "./View/Login/Login";
import Signup from "./View/Signup/Signup";
import ProductDetails from "./View/Components/ProductDetails";
import { AuthProvider } from "./View/Context/AuthContext";
import SearchResult from "./View/Components/SearchResult";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shop/:gender/:category" element={<ProductsByName />} />
            <Route path="/shop/:gender" element={<ProductsByGender />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/gender/:gender" element={<SearchResult />} />
            <Route path="/products/category/:category" element={<SearchResult />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
export default App;
