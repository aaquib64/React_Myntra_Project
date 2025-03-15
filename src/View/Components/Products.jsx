import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5408/products")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setProducts([]); // Fallback to an empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []); // put id or city in array

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      {" "}
      {/* Adds margin from the top */}
      {Array.isArray(products) && products.length > 0 ? (
        <div className="row px-3 ">
          {" "}
          {/* Adds padding on both sides */}
          {products.map((prod) => (
            <div
              key={prod.id}
              className="col-lg-3 col-md-4 col-sm-6 mb-3 mx-auto"
            >
              <div className="card h-100 d-flex flex-column">
                <img
                  src={prod.image}
                  className="card-img-top"
                  alt={prod.name}
                  style={{ height: "220px", objectFit: "cover" }} // Adjusted height
                />
                <div className="card-body d-flex flex-column p-2">
                  <h5 className="card-title text-center">{prod.names}</h5>
                  <h6 className="text-muted text-center">{prod.brand}</h6>
                  {/* <p className="text-muted text-center small">
                    {prod.material}
                  </p>
                  <p className="card-text flex-grow-1 text-center small">
                    {prod.description}
                  </p> */}
                  <p className="fw-bold text-primary text-center">
                    ${prod.price}
                  </p>
                  
                  <button className="btn btn-danger mt-auto btn-sm">
                  SHOP NOW
                  </button>
                  <Link to="/">
                 
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Restaurants;
