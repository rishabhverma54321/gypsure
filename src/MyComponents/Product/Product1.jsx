import React from 'react'
import { Link } from 'react-router-dom';
import "../css/products.css";
import imgtest from "../images/image test report.svg";
import imgtype1 from "../images/image gyppowder.svg";
import imgadv from "../images/image adv.svg";
export const Product1 = () => {
    return (
        <div className="responsive-rapper">
            <div className="products-type1">
      <div >
        <div className="products-title">
          <div className="responsive-img-product1">
            <img src={imgtype1} alt="" />
          </div>
          <div className= " responsive-products-title-right products-title-right ">
            <h1>
              GYPSURE PLUS <br /> GYPSUM POWDER
            </h1>
            <p>
              HIGH Grade Superior Quality <br /> Imported Gypsum Powder
            </p>
            <p className="products-tittle-right-subheading ">
              Gypsure Plus Gypsum Powder the Ultimate Gypsum Plaster is a light
              weight and Pure Gypsum Based Plaster suitable for hand and machine
              application for Internal wall and Partition surface including
              Brick, Block and Concrete.
            </p>
          </div>
        </div>
        <div className="products-tittle-right-subheading1 ">
          It consists essentially of Pure Gypsum Hemihydrates formulation with
          special additives to control application and setting characteristics.
          After Drying, it gives brilliant white, smooth and Fine finish.
          Gypsure Plus Gypsum is premium quality Gypsum Plaster, Asbestos free
          to improve the plaster's handling, work ability and application. There
          is no need of any additional coat of wall putty.
        </div>
      </div>
      <div className="products-table-report">
          <h1>Test Reports</h1>
          <img src={imgtest} alt="" />
          <p> The Gypsure Plus Gypsum Complies with the result of BIS: 2547 Part II- 1976 for  Gypsum Building material.</p>
      </div>
      <div className="products-feature">
          <h1>GYPSUM PLASTERING FEATURES</h1>
          {/* we use div to use flex box */}
          <div className="products-features">
              <div className="products-feature-articles">
                  <h2>Low Cost and Affordable</h2>
                  <p>The Product costs less than the cement plaster</p>
              </div>
              <div className="products-feature-articles">
                  <h2>Compatiable with all paints</h2>
                  <p>Gypsum  is compaitable with all kinds  of primer  and paints available in market</p>
              </div>
              <div className="products-feature-articles">
                  <h2>Reduced Construction Time</h2>
                  <p>Significantly reduce the construction time. No nwater curing, wall ready for next process withing 72 hours.</p>
              </div>
              <div className="products-feature-articles">
                  <h2>Green Building</h2>
                  <p>Make your building green be using Gypsum plaster. Save on long term electricity bills. This plaster gives additional points for LEED</p>
              </div>
              <div className="products-feature-articles">
                  <h2>Applicable on all Wall Type</h2>
                  <p style={{width:'1000px'}}>Gypsum is applicable on wall surface- Bricks, Cement Blocks, InterLock Brick, AAC Blocks2</p>
              </div>
          </div>
      </div>
      <div className="products-advantages">
          <h1>ADVANTAGES OF GYPSUM PLASTERING</h1>
          <img src={imgadv} alt="" />
      </div>
      <div className="products-link">
          <h2><Link to="/"> VIEW TEST REPORT </Link></h2>
          <h3> <Link to="/"> NEXT PRODUCT </Link></h3>
          <h1> <Link to="/">DOWNLOAD BROUCHE </Link></h1>
      </div>
      </div>
        </div>
    )
}
