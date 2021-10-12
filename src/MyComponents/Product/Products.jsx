import React from "react";
import "../css/products.css";
import  ProductHeader  from "./ProductHeader";
import { Product1 } from "./Product1";
import { Product2 } from "./Product2";
import { withRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 const Products = () => {
//   var plus = document.getElementById('plus');
//  const styl = () =>{
//     plus.style.color ="blue"
//  }
  return (
     <Router>
    <>
      <ProductHeader/>
      <Switch>
        <Route  path="/productproduct1">
            <Product1/>
          </Route> 
          <Route path="/productproduct2">
            <Product2/>
          </Route>
      <Product2/>
      </Switch>


     </>
     </Router>

  )
};

export default withRouter(Products); 