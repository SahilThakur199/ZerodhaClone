import React from "react";
import OpenAcc from "../OpenAcc";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="media/landing.png" alt="Hero" style={{ width: "90%", height: "auto", margin: "60px" }} className="mb-5 h-45" />
        <OpenAcc heading="Invest in everything" ContPara="Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more." />
      </div>
    </div>
  );
}

export default Hero;
