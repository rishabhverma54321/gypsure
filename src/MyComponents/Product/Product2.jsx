import React from 'react'
import { Link } from 'react-router-dom';
import "../css/products.css";
import imgtype2 from "../images/image type2.svg";
import imgtype3 from "../images/image type3.svg";
import imgfeatures1 from "../images/image feature1.png";
import imgfeatures2 from "../images/image feature2.svg";
import imgbenifits1 from "../images/image benifits1.svg";
import imgbenifits2 from "../images/image benifits2.svg";
import imgapplication from "../images/image application.svg";

export const Product2 = () => {
    return (
        <div>
            <div className="products-type2">
     <div>
      <div className="products-title">
          <div>
            <img src={imgtype2} alt="" />
          </div>
          <div className="products-title-right ">
            <h1 style={{textAlign:'start', marginBottom:'50px'}}>
            GYPSURE BOND <br /> PLUS
            </h1>
            <h3 style={{maxWidth:'680px',textAlign:'start'}}>
            <b>GYPSURE BOND PLUS </b> is a bonding agent for 
            gypsum plaster that enables preparation of ceiling and wall 
            surfaces (especially RCC surfaces) within 24 hour
            It completely eliminates the risk of de-bonding gypsum plaster 
            from low suction backgrounds viz Rcc surfaces (Aluminium 
            form work & ceilings). 
            </h3>
          </div>
        </div>
        <div className="products-tittle-right-subheading1 " style={{marginTop:'107px'}}>
        It eliminates hacking, roughing & putting wire mesh on concrete surface, it is specially formulated ready to use adhesive consist of organ resins with 
        attitives.
        </div>
        <div className="products-tittle-right-subheading1 " style={{marginTop:'107px'}}>
        <b> GYPSURE BOND PLUS </b> with its unique formulation of polymers. additives and sand fillers offers dual  benefits of mechanical and chemical bonding
        </div>

        <div className="product-table">
        <table class="table">
  <thead>
    <tr className="product-table-heading">
      <th scope="col">Technical Parameters</th>
      <th scope="col">Range/Value</th>
    </tr>
  </thead>
  <tbody>
    <tr className="product-table-body">
      <td>Drying Time</td>
      <td>1 Day</td>
    </tr>
    <tr className="product-table-body">
    <td>Opening time for plastering</td>
      <td>45-50 sqft.</td>
    </tr>
    <tr className="product-table-body">
      <td>Coverage</td>
      <td>2 to 10 Days</td>
    </tr>
    <tr className="product-table-body">
      <td>Ambient temp requirement</td>
      <td>5 to 45 °c</td>
    </tr>
    <tr className="product-table-body">
      <td>Pull out Strength (failure load)</td>
      <td> <span>&#62;</span>1.01 Mpa</td>
    </tr>
  </tbody>
</table>
        </div>
        {/* GYPSURE BOND 151 */}
        <div className="product-type3">
          <div className="product-type3-left">
            <h1>GYPSURE BOND  <br /> 151</h1>
            <p>GYPSURE BOND 151 is ready to apply single coat application with very strong chemical bond. No hacking 
                required on RCC Surface. Apply Gypsum Plaster with in 1 to 
                24 hours of GYPSURE BOND 151 application.
                </p>
          </div>
          <div className="product-type3-right">
            <img src={imgtype3} alt="" />
          </div>
        </div>
        <div className="product-table">
        <table class="table">
  <thead>
    <tr className="product-table-heading">
      <th scope="col">Technical Parameters</th>
      <th scope="col">Range/Value</th>
    </tr>
  </thead>
  <tbody>
    <tr className="product-table-body">
      <td>Drying Time</td>
      <td>1 Hour</td>
    </tr>
    <tr className="product-table-body">
    <td>Opening time for plastering</td>
      <td>1 to 24 Hour</td>
    </tr>
    <tr className="product-table-body">
      <td>Coverage</td>
      <td>151 sqft.</td>
    </tr>
    <tr className="product-table-body">
      <td>Ambient temp requirement</td>
      <td>5 to 45 °c</td>
    </tr>
    <tr className="product-table-body">
      <td>Pull out Strength (failure load)</td>
      <td> <span>&#62;</span>1.01 Mpa</td>
    </tr>
  </tbody>
</table>
        </div>
        
        {/* features  */}
    <div className="product-type2-features-benifits">
    <div className="product-type2-features">
      <h2>Features</h2>
      <div className="product-type2-features-img">
      <img src={imgfeatures1} alt="" />
      <img src={imgfeatures2} alt="" />
      </div>
    </div>
    <div className="product-type2-benifits">
      <h2 >Benifits</h2>
      <div className="product-type2-benifits-img">
      <img src={imgbenifits1} alt="" />
      <img src={imgbenifits2} alt="" />
      </div>
    </div>
    </div>
    <div className="product-type2-application">
      <h1> Areas of Application </h1>
      <img src={imgapplication} alt="" />
    </div>
    <div className="products-link" style={{marginTop:'130px'}}>
          <h3> <Link to="/"> PREVIOUS PRODUCT </Link></h3>
          <h1> <Link to="/">DOWNLOAD BROUCHE </Link></h1>
      </div>
      </div>
      </div>
        </div>
    )
}
