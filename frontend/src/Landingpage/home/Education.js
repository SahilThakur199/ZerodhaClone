import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-1">
        </div>
        <div className="col-5 mr-5 mb-5">
          <img src="media/index-education.svg" alt="Education" style={{ width: "70%", height: "auto", marginTop: "60px" }} className="mb-5" />
        </div>
        <div className="col-5 mt-5">
          <h3 className="mb-4">Free and open market education</h3>
          <p className="">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
            <p className="mt-4"><a href="" style={{ color: "blue", textDecoration: "none" }}>Varsity</a></p>
          </p>
          <p className="">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
            <p className="mt-4"><a href="" style={{ color: "blue", textDecoration: "none" }}>TradingQ&A</a></p>
          </p>
        </div>
        <div className="col-1">
        </div>
    </div>
    </div>
  );
}

export default Education;
