import React from "react";
import "./WomenProductList.css";

const WomenProductList = (prodlist) => {
  // Functional component that accepts the products data passed to it
  // custom method, called from the view in the render() below
  const renderList = ({ prodlist }) => {
    // temp argument that recieves the data passed to this component by product component

    if (prodlist) {
      // If data exists
      return prodlist.map((data) => {
        // map() function ittretively executes once for each record in json file
        return (
          <div key={data.product_id} className="card-container col-md-3">
            <div className="row">
              <div className="card-img">
                <img
                  className="card-img-top"
                  src={data.image}
                  alt={data.name}
                />
              </div>

              <h4 className="B-name"> {data.brand}</h4>
              <span className="P-name">{data.name}</span>
            </div>
            <div className="card-body">
              <p className="P-Type"> {data.material}</p>
              <div className="card-text">
                <p className="P-Discription"> {data.description}</p>
                <hr />
                <h4 className="P-price">Rs. {data.price}</h4>
              </div>
              <button className="Add-button">ADD TO CART</button>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div className="container">
      <div className="row">
        {renderList(prodlist)}{" "}
        {/* Calls the above custom function to render the data in the view */}
      </div>
    </div>
  );
};

export default WomenProductList;
