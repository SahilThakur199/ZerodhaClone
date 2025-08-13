import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";
function ProductsPage() {
  return (
    <div className="products-page">
      <Navbar />
      <Hero />
      <LeftSection
        Limage="media/products-kite.png"
        Lheading="Kite"
        Lpara="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        Lcontent1="Try Demo →"
        Llink1="https://kite.zerodha.com/"
        Lcontent2="Learn More →"
        Llink2="https://kite.zerodha.com/download"
      />
      <RightSection
        Rimage="media/products-console.png"
        Rheading="console"
        Rpara="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Rcontent1="Learn More →"
        Rlink1="https://kite.zerodha.com/"
      />
      <LeftSection
        Limage="media/products-coin.png"
        Lheading="Coin"
        Lpara="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Lcontent1="Coin →"
        Llink1="https://q.zerodha.com/"
        Lcontent2="Learn More →"
        Llink2="https://q.zerodha.com/download"
      />
      <RightSection
        Rimage="media/products-coin.png"
        Rheading="Kite Connect API"
        Rpara="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Rcontent1="Kite Connect →"
        Rlink1="https://q.zerodha.com/"
      />
      <LeftSection
        Limage="media/varsity-mobile.png"
        Lheading="Varsity mobile"
        Lpara="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        Lcontent1="Learn More →"
        Llink1="https://q.zerodha.com/"
      />
      <h3 className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h3>
      <Universe />
      <Footer />
    </div>
  );
}
export default ProductsPage;