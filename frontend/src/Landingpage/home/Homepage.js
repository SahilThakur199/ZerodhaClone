import React from "react";
import Navbar from "../Navbar";
import Hero from "./hero";
import Stats from "./Stats";
import Education from "./Education";
import Pricing from "./Pricing";
import OpenAcc from "../OpenAcc";
import Footer from "../Footer";


function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAcc heading="Open a Zerodha account" ContPara="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades." />
      <Footer />
    </div>
  );
}

export default Homepage;
