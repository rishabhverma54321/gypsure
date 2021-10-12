import React from 'react'
import { Link , withRouter} from 'react-router-dom'

const Header = ({history}) => {
  console.log(history)
  const getcolor = (curr) =>{
     if(history.location.pathname===curr)
     {
       return ('underline black')
     }
  }
        return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light  " style = {{height:"60px", backgroundColor:'transparent'}}>
  <div className="container-fluid">
    <Link className="navbar-brand ms-5"  to="/">Logo</Link>
    <div className="collapse navbar-collapse d-flex justify-content-end me-5">
      <ul className="navbar-nav mb-2 me-3 mb-lg-0">
        <li className="nav-item navhover me-5">
          <Link className="nav-link "  to="/" style={{textDecoration:getcolor('/')}}>Home</Link>
        </li>
        <li className="nav-item  navhover me-5">
          <Link className="nav-link" to="/about" style={{textDecoration:getcolor('/about')}}>About Us</Link>
        </li>
        <li className="nav-item  navhover me-5">
          <Link className="nav-link" to="/products" style={{textDecoration:getcolor('/products')}}>Products</Link>
        </li>
        <li className="nav-item  navhover me-5">
          <Link className="nav-link" to="/client" style={{textDecoration:getcolor('client')}}>Client</Link>
        </li>
        <li className="nav-item  navhover me-5">
          <Link className="nav-link" to="/imggallary" style={{textDecoration:getcolor('/imggallary')}}>Gallary</Link>
        </li>                                                           
      </ul>
      <button className="btn button-background-color" type="submit">Contact Us</button>
    </div>
  </div>
</nav>
        </>
    )
}

export default withRouter(Header);