import React, { Component } from "react";
import Database from "../Beauty/BeautyDB.json";
import BeautyPoductList from "./BeautyProductList";
import "./BeautyProductList.css";

//'React: is a default import. Default imports are exported with 'export default <classname>'. There is only one default export.
// {}: is used for a named import. Member imports are exported with 'export <function/props/class'.
// There can be myltiple member exports

class BeautyProduct extends Component {
  constructor() {
    super();
    this.state = {
      // State
      title: "", // Props
      products: Database, // Assign the Database.json file to the prop
    };
  }
  render() {
    return (
      <div>
        <h1> {this.state.title} </h1>
        <BeautyPoductList prodlist={this.state.products} />{" "}
        {/* pass data from .json file to ProductList component prop */}
      </div>
    );
  }
}
export default BeautyProduct;
