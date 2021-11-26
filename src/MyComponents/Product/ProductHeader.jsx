import React from 'react'
import "../css/products.css";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
const ProductHeader = ({history}) => {
    console.log(history);
    const getweight = (curr) =>{
        if(history.location.pathname===curr)
        {
            return(
                    "bold"
            )
          
            }
        }
          const getsize = (curr) =>{
                if(history.location.pathname===curr)
                {
                    return(
                            "19px"
                    )
                  
                    }
                }
                    const getborder = (curr) =>{
                        if(history.location.pathname===curr)
                        {
                            return(
                                    "underline black"
                            )
                          
                            }
        }
            
    return (
        <div>
                  <div className="products-heading">
        <h1>
          EXPLORE OUR
          <br /> PRODUCTS
        </h1>
        <p className="align-self-end">We Deliever Best In Quality</p>
      </div>
      <div className="products-type">
          <span id='plus'><Link to="/productproduct1" activeClassName='active' style={ {fontWeight:getweight('/productproduct1'), fontSize:getsize('/productproduct1'),textDecoration:getborder('/productproduct1')}}>GYPSURE PLUS GYPSUM POWDER </Link></span>
          <span id='bonds'><Link to="/productproduct2" activeClassName='active'  style={ {fontWeight:getweight('/productproduct2'), fontSize:getsize('/productproduct2'),textDecoration:getborder('/productproduct2')}}>GYPSURE BONDS </Link></span>

      </div>
        </div>
    )
    }

export default withRouter(ProductHeader);                                 