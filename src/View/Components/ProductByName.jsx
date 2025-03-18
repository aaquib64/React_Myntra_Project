// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const Restaurants = () => {
//   const { names } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://myntra-server-b529.onrender.com/products/${names}`)
//       .then((response) => {
//         console.log("API Response:", response.data); // Debugging
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           console.error("Unexpected API response:", response.data);
//           setProducts([]); // Fallback to an empty array
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [names]); // put id or city in array

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="container mt-4">

//       {Array.isArray(products) && products.length > 0 ? (
//         <div className="row px-3 mt-2">

//           {products.map((prod) => (
//             <div
//               key={prod.id}
//               className="col-lg-3 col-md-4 col-sm-6 mb-3 mx-auto"
//             >
//               <div className="card h-100 d-flex flex-column">
//                 <img
//                   src={prod.image}
//                   className="card-img-top"
//                   alt={prod.name}
//                   style={{ height: "220px", objectFit: "cover" }} // Adjusted height
//                 />
//                 <div className="card-body d-flex flex-column p-2">
//                   <h5 className="card-title text-center">{prod.names}</h5>
//                   <h6 className="text-muted text-center">{prod.brand}</h6>
//                   {/* <p className="text-muted text-center small">
//                     {prod.material}
//                   </p>
//                   <p className="card-text flex-grow-1 text-center small">
//                     {prod.description}
//                   </p> */}
//                   <p className="fw-bold text-primary text-center">
//                     ${prod.price}
//                   </p>
//                   <button className="btn btn-danger mt-auto btn-sm ">
//                    SHOP NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default Restaurants;

//----------------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Restaurants = () => {
  const { names } = useParams();
  const { category } = useParams();
  const [categories, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://myntra-server-b529.onrender.com/getAllRestaurantByGender/${names}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          const uniqueCategory = [
            ...new Set(response.data.map((res) => res.category)), // Set is method is used to set a array
          ];
          setCategory(uniqueCategory);
        }
      })
      .catch((error) => console.error("Error fetching category:", error));
  }, [category]); // put id or city in array

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setLoading(true);
    setError(null);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;
    axios
      .get(`https://myntra-server-b529.onrender.com/getAllRestaurantByGender/Men/${category}`)
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => {
        setError("Failed to fetch category.");
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="dropdown-container">
        <label>Select a Category: </label>
        <select
          onChange={(event) => handleCategoryChange(event)}
          value={selectedCategory}
        >
          {" "}
        
          <option value="">-- Select --</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="container mt-4">
        {Array.isArray(products) && products.length > 0 ? (
          <div className="row px-3 mt-2">
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
                    <button className="btn btn-danger mt-auto btn-sm ">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
