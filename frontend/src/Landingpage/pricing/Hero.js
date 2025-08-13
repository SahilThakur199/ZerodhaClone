import React from "react";


function Hero() {
  return (
    <div className="container">
      <div className="row mb-5 mt-5">
        <div className="col text-center">
          <h1 className="mt-5 mb-4">Charges</h1>
          <h3 className="mb-4 text-muted">List of all charges and taxes</h3>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-4 text-center">
          <img src="/media/pricing-eq.svg" alt="Charges" className="img-fluid" style={{ width: "80%", height: "auto" }} />
          <h3>Free equity delivery</h3>
          <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 text-center">
          <img src="/media/20-trades.svg" alt="Charges" className="img-fluid" style={{ width: "80%", height: "auto" }} />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 text-center">
          <img src="/media/pricing-eq.svg" alt="Charges" className="img-fluid" style={{ width: "80%", height: "auto" }} />
          <h3>Free direct MF</h3>
          <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>

    </div>
  );
}

export default Hero;
