// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const ProducByGender = () => {
//   const { gender } = useParams();
//   const [categories, setCategories] = useState([]);
//   const [selectedCat, setSelectedCat] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5408/productByGender/${gender}`)
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           const UniqueCats = [...new Set(response.data.map((r) => r.category))];
//           setCategories(UniqueCats);
//         }
//       })
//       .catch((error) => console.error("Error fetching Gender:", error));
//   }, [gender]); // put id or city in array

//   const handleCategoryChange = (event) => {
//     const category = event.target.value;
//     setSelectedCat(category);
//     setLoading(true);
//     setError(null);
//     // if (loading) return <p>Loading...</p>;
//     // if (error) return <p>Error: {error}</p>;

//     axios
//       .get(`http://localhost:5408/getByCategory/${category}`)
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           setProducts([]);
//         }
//       })
//       .catch((error) => {
//         setError("Failed to fetch products.");
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <div className="dropdown-container d-flex justify-content-center align-items-start">
//         <div className="w-100" style={{ maxWidth: "500px" }}>
//           <label className="form-label text-center">Select a Category:</label>
//           <select
//             onChange={handleCategoryChange}
//             value={selectedCat}
//             className="form-select"
//             style={{ width: "100%", fontSize: "14px", padding: "8px" }}
//             aria-label="Default select example"
//           >
//             <option value="">-- Select --</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {loading && <p className="loading text-center">Loading restaurants...</p>}
//       {error && <p className="error">{error}</p>}

//       <div className="container mt-4">
//         {products.length > 0 ? (
//           <div className="row px-3">
//             {products.map((prod) => (
//               <div
//                 key={prod.id}
//                 className="col-lg-3 col-md-4 col-sm-6 mb-3 mx-auto"
//               >
//                 <div className="card h-100 d-flex flex-column">
                
//                   <img
//                     src={prod.image}
//                     className="card-img-top"
//                     alt={prod.name}
//                     style={{ height: "220px", objectFit: "cover" }}
//                   />
//                   <div className="card-body d-flex flex-column p-2">
//                     <h5 className="card-title text-center">{prod.names}</h5>
//                     <h6 className="text-muted text-center">{prod.brand}</h6>

//                     <p className="fw-bold text-primary text-center">
//                       ${prod.price}
//                     </p>
//                     <button className="btn btn-danger mt-auto btn-sm ">
//                     <Link to={`/product/${products.id}`} > SHOP NOW </Link>
//                     </button>
                    
//                   </div>
//                 </div>
               
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center">No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProducByGender;


  /* <div className="dropdown-container">
        <label>Select a City: </label>
        <select onChange={handleCategoryChange} value={selectedCat}>
          <option value="">-- Select --</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div> */

//-----------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const ProducByGender = () => {
//   const {gender} = useParams();
//   const [Genders, setGenders] = useState([]);
//   const [selectedGender, setSelectedGender] = useState("")
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5408/products")
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           const Gen = [
//             ...new Set(response.data.map((r) => r.gender)),
//           ];
//           setGenders(Gen);
//         }
//       })
//       .catch((error) => console.error("Error fetching Gender:", error));
//   }, []); // put id or city in array

//   const handleGenderChange = (event) => {
//     const gender = event.target.value;
//     setSelectedGender(gender);
//     setLoading(true);
//     setError(null);
//   // if (loading) return <p>Loading...</p>;
//   // if (error) return <p>Error: {error}</p>;

//   axios
//   .get(`http://localhost:5408/productByGender/${gender}`)
//   .then((response) => {
//     if (response.data && Array.isArray(response.data)) {
//       setProducts(response.data);
//     } else {
//       setProducts([]);
//     }
//   })
//   .catch((error) => {
//     setError("Failed to fetch products.");
//     setLoading(false);
//   });
// };

//   return (
//     <div>
//        <div className="dropdown-container">
//         <label>Select a City: </label>
//         <select onChange={handleGenderChange} value={selectedGender}>
//           <option value="">-- Select --</option>
//           {Genders.map((gender, index) => (
//             <option key={index} value={gender}>
//               {gender}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading && <p className="loading">Loading restaurants...</p>}
//       {error && <p className="error">{error}</p>}

//     <div className="container mt-4">

//       { products.length > 0 ? (
//         <div className="row px-3">
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
//                   style={{ height: "220px", objectFit: "cover" }}
//                 />
//                 <div className="card-body d-flex flex-column p-2">
//                   <h5 className="card-title text-center">{prod.names}</h5>
//                   <h6 className="text-muted text-center">{prod.brand}</h6>

//                   <p className="fw-bold text-primary text-center">
//                     ${prod.price}
//                   </p>
//                   <button className="btn btn-danger mt-auto btn-sm">
//                     SHOP NOW
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
//   </div>
//   );
// };

// export default ProducByGender;

//----------------------------------------------------------

//----------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const Restaurants = () => {
//   const { names } = useParams();
//   const { category } = useParams();
//   const [categories, setCategory] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
<<<<<<< HEAD
//       .get(`https://myntra-server-b529.onrender.com/${gender}`)
=======
//       .get(`https://myntra-server-b529.onrender.com/getAllRestaurantByGender/${names}`)
>>>>>>> 4f9e7b822d61026622f1f680c3ddbfd9785df6d4
//       .then((response) => {
//         console.log("API Response:", response.data); // Debugging
//         if (Array.isArray(response.data)) {
//           const uniqueCategory = [
//             ...new Set(response.data.map((res) => res.category)), // Set is method is used to set a array
//           ];
//           setCategory(uniqueCategory);
//         }
//       })
//       .catch((error) => console.error("Error fetching category:", error));
//   }, [category]); // put id or city in array

//   const handleCategoryChange = (event) => {
//     const category = event.target.value;
//     setSelectedCategory(category);
//     setLoading(true);
//     setError(null);

//     // if (loading) return <p>Loading...</p>;
//     // if (error) return <p>Error: {error}</p>;
//     axios
<<<<<<< HEAD
//       .get(`https://myntra-server-b529.onrender.com/getAllRestaurantByGender/${gender}/${category}`)
=======
//       .get(`https://myntra-server-b529.onrender.com/getAllRestaurantByGender/Men/${category}`)
>>>>>>> 4f9e7b822d61026622f1f680c3ddbfd9785df6d4
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           setProducts([]);
//         }
//       })
//       .catch((error) => {
//         setError("Failed to fetch category.");
//         setLoading(false);
//       });
//   };

//   return (
//     console.log("cities-->>>",categories), 
//     <div>
//       <div className="dropdown-container">
//         <label>Select a Category: </label>
//         <select
//           onChange={(event) => handleCategoryChange(event)}
//           value={selectedCategory}
//         >
//           {" "}
        
//           <option value="">-- Select --</option>
//           {categories.map((category, index) => (
//             <option key={index} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="container mt-4">
//         {Array.isArray(products) && products.length > 0 ? (
//           <div className="row px-3 mt-2">
//             {products.map((prod) => (
//               <div
//                 key={prod.id}
//                 className="col-lg-3 col-md-4 col-sm-6 mb-3 mx-auto"
//               >
//                 <div className="card h-100 d-flex flex-column">
//                   <img
//                     src={prod.image}
//                     className="card-img-top"
//                     alt={prod.name}
//                     style={{ height: "220px", objectFit: "cover" }} // Adjusted height
//                   />
//                   <div className="card-body d-flex flex-column p-2">
//                     <h5 className="card-title text-center">{prod.names}</h5>
//                     <h6 className="text-muted text-center">{prod.brand}</h6>
//                     {/* <p className="text-muted text-center small">
//                     {prod.material}
//                   </p>
//                   <p className="card-text flex-grow-1 text-center small">
//                     {prod.description}
//                   </p> */}
//                     <p className="fw-bold text-primary text-center">
//                       ${prod.price}
//                     </p>
//                     <button className="btn btn-danger mt-auto btn-sm ">
//                       SHOP NOW
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Restaurants;
