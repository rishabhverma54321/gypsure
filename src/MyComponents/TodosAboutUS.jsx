import React from "react";
import "./css/Todos.css";

export const TodosAboutUS = () => {
  return (
    <>
      <div className="container-main">
        <div className="grading-top">
          <div className="grading"></div>
        </div>
        <h1 className="container-main-text">
          About <br /> Us
        </h1>
        <div className="responsive-container-text float-end me-5">
          <h5 style={{ letterSpacing: "1px" }}>
            We Provide You The Best Imported White Powder And Gypsum Lumps
          </h5>
        </div>
        <div className="container-main-middle-text" style={{ letterSpacing: "1px" }}>
          Shri Balaji Plasters is Leading Importer of Gypsum Powder Started in
          Pune, Shri Balaji Plasters has Expanded business to all over India and
          has emerged as a strong leader in import of Gypsum Powder. Started in
          2013, “Shri Balaji Plasters” has earned an outstanding reputation as
          the supplier of best quality Gypsum Powder, Plaster of Paris, Gypsum
          Bond-Plus Gypsum Boards and other Gypsum Products for construction
          industry.
          <div
            className="responsive-container-main-middle-text"
            style={{ letterSpacing: "1px" }}
          >
            Over the years we have been able to distinguish ourselves as a
            leading supplier by constantly defining and refining excellence in
            products, process and customer care.
          </div>
          <div className="" style={{ letterSpacing: "1px" }}>
            In our zeal to expand our wings and cater to the constant demand
            from clients, we are engaged in the Import and Distribution of :
            </div>
            <div style={{ letterSpacing: "1px", marginTop:"70px", fontWeight:'bold', lineHeight:'29px'}}>
              Gypsure Plus Gypsum Powder (White Gypsum) <br /> Gypsure Bond Plus
              (Green) <br /> Gypsure Bond 151 (White)
            </div>
        </div>
        <div className="grading-bottom float-end">
          <div className="gradingBottom"></div>
        </div>
      </div>
    </>
  );
};
