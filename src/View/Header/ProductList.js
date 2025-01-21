import React from "react";
import './ProductList.css';

const ProductList = (prodlist) => {               // Functional component that accepts the products data passed to it
                                                 // custom method, called from the view in the render() below
     const renderList =({prodlist})=>{           // temp argument that recieves the data passed to this component by product component
        
        if(prodlist){                                 // If data exists
            return prodlist.map((data) => {           // map() function ittretively executes once for each record in json file
                return(
                    <div key= {data.product_id} className="card col-md-3">
                        <div className="row">
                            <div className="card-img">
                                <img className="card-img-top" src={data.image} alt={data.name}/>
                            </div>
                         
                            <h4 className="day"> {data.brand}</h4>
                            <span className="topTemp">{data.name}</span>
                        </div>
                        <div className="card-body">
                            <span className="type"> {data.material}</span> 
                            <div className="card-text">
                                <p className="Discription"> {data.description}</p>
                                <hr/>
                                <h4 className="max">Rs. {data.price}</h4>  
                            </div>
                            <button className="btn" >ADD TO CART</button>
                            
                        </div>

                    </div>
                    
                )

            })
        }
     }
    return ( 
        <div className="container">
            <div  className="row">
                {renderList(prodlist)}        {/* Calls the above custom function to render the data in the view */}
            </div>
        </div>
     );
}

export default ProductList;