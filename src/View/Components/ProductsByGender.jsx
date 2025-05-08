import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PaginationControls from "../Components/PaginationControls"

const ProductByGender = () => {
  const { gender } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    axios

      .get(`https://trendify-server-gb90.onrender.com/shop/${gender}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (response.data.products && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error("Unexpected API response:", response.data);
          setProducts([]); // Fallback to an empty array
        }
        setLoading(false);
        setPage(1); // Reset to page 1 when gender changes
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [gender]); // put id or city in array

  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

const startIndex = (page - 1) * productsPerPage;
const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  if (loading) return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div
        className="spinner-border text-danger"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
  
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5">
      {" "}
      {/* Adds margin from the top */}
      {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
        <div>
            <div className="row px-3">
              {" "}
              {/* Adds padding on both sides */}
              {currentProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="col-lg-3 col-md-4 col-sm-6 mb-3 mx-auto"
                >
                  <div className="card h-100 d-flex flex-column">
                    <img
                      src={prod.image}
                      className="card-img-top image"
                      alt={prod.name}
                      style={{ height: "220px", objectFit: "cover" }} // Adjusted height
                    />
                    <div className="card-body d-flex flex-column p-2 text-center">
                      <h5 className="card-title text-center">{prod.name}</h5>
                      <h6 className="text-muted text-center">{prod.brand}</h6>

                      <p className="fw-bold text-primary text-center">
                      ₹{prod.price}
                      </p>
                      <Link to={`/products/${prod.id}`}>
                      <button className="btn btn-danger btn-sm">
                        SHOP NOW</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Controls */}
            <PaginationControls
                page={page}
                totalPages={totalPages}
                onNext={handleNext}
                onPrev={handlePrev}
              />
        </div>
        
      ) : (
        <p>No products found.</p>
      )}
    </div>    
  );
};

export default ProductByGender;
