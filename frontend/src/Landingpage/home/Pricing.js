import React from "react";
import Fees from "./Fees";

function Pricing() {
  return (
    <div className="container mb-5 p-5">
      <div className="row">
        <div className="col-5 mt-5">
         <h3>Unbeatable pricing</h3>
         <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
         <a href="" style={{ color: "blue", textDecoration: "none" }}>See More</a>
        </div>
        <div className="col-1">
        </div>
        <div className="col text-center">
          <Fees imgsrc="media/pricing-eq.svg" caption="Free account opening" /> 
        </div>
        <div className="col text-center">
          <Fees imgsrc="media/pricing-eq.svg" caption="Free equity delivery and direct mutual funds" />
        </div>
        <div className="col text-center">
          <Fees imgsrc="media/20-trades.svg" caption="Intraday and F&O" />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
