import axios from "axios";

const API_BASE_URL = "https://trendify-server-gb90.onrender.com";

// Fetch all Products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Products:", error);
    return [];
  }
};

// Fetch products details
export const fetchProductDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data.products;                // dbt
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

// Fetch products by gender
export const fetchProductsByGender = async (gender, page = 1, limit = 10) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/shop/${gender}?page=${page}&limit=${limit}`
    );
    return response.data; // includes products, totalPages, etc.
  } catch (error) {
    console.error("Error fetching products by gender:", error);
    return { products: [], totalPages: 0 };
  }
};

// export const fetchProductsByGender = async (gender) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/shop/${gender}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products in gender:", error);
//     return [];
//   }
// };

// User Signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData,);
    
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    return { error: "Signup failed" };
  }
};

// export const signupUser = async (name, email, address, password) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}`, {
//         name,
//         email,
//         address,
//         password,
//       }, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       return response.data;
//     } catch (error) {
//       console.error("Signup failed:", error);
//       throw error?.response?.data?.message || "Signup failed";
//     }
//   };

// User Login


export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data; // returns { token, user }
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error(
      error.response?.data?.message || "Login failed. Please try again."
    );
  }
};


// export const loginUser = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/login`, credentials);
//     return response.data;
//   } catch (error) {
//     console.error("Login failed:", error);
//     return { error: "Login failed" };
//   }
// };
