import React from 'react'

import { NavLink , withRouter, useHistory} from 'react-router-dom'
 
const Header =  () => {

        return (
        <>
        <nav style={{position:"relative",zIndex:"2"}} class="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
  <NavLink style={{fontWeight:"bolder"}} className="navbar-brand ms-5"  to="/">Logo</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className="  collapse navbar-collapse" id="navbarSupportedContent">
    <div style={{width:"100%"}} className=" responsive-nav-bar nav-responsive-bar d-flex justify-content-end">
      <ul className="navbar-nav mb-2 me-3 mb-lg-0">
      <li active ClassName='navhover' className="nav-item navcolor me-5">
          <NavLink activeClassName = 'navhover' className="nav-link " exact  to="/" >Home</NavLink>
        </li>
        <li className="nav-item navcolor me-5">
          <NavLink activeClassName = 'navhover' className="nav-link" to="/about" >About Us</NavLink>
        </li>
        <li className="nav-item navcolor  me-5">
          <NavLink activeClassName = 'navhover' className="nav-link" to="/products" >Products</NavLink>
        </li>
        <li  className="nav-item navcolor me-5">
          <NavLink activeClassName = 'navhover' className="nav-link" to="/client" >Client</NavLink>
        </li>
        <li  className="nav-item navcolor me-5">
          <NavLink  activeClassName = 'navhover' className="nav-link" to="/imggallary" >Gallary</NavLink>
        </li> 
      </ul>
      <button className="btn button-background-color" type="submit"><NavLink style={{backgroundColor:"transparent",textDecoration:"none",color:"white"}} to="/last">Contact Us</NavLink></button>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default withRouter(Header);