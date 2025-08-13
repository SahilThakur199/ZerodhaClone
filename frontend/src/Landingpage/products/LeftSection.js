import React from "react";

function LeftSection({ Limage, Lheading, Lpara, Lcontent1, Llink1, Llink2, Lcontent2 }) {
  return (
    <div className="container mt-5 mb-5 pt-5 pb-5">
      <div className="row">
        
        <div className="col-6">
          <img src={Limage} alt="Product" className="" />
        </div>
        <div className="col-1"></div>
        <div className="col-5 mr-5 pr-5" style={{ textAlign: "left", padding: "20px", }}>
          <h4>{Lheading}</h4>
          <p>{Lpara}</p>

          <a href={Llink1} target="_blank" rel="noopener noreferrer" className="" style={{ textDecoration: "none", marginRight: "25px", paddingRight: "5px" }}>
            {Lcontent1 }
          </a>
          <a href={Llink2} target="_blank" rel="noopener noreferrer" className="" style={{ textDecoration: "none", marginLeft: "15px", paddingLeft: "25px" }}>
            {Lcontent2}
          </a>
          <p className="mt-5">
            <a href="https://apps.apple.com/app/id1002104909" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginRight: "15px" }}>
              <img src="media/appstore-badge.svg" alt="Kite Logo" className="img-fluid" />
            </a>


            <a href="https://play.google.com/store/apps/details?id=com.zerodhakite" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginLeft: "15px" }}>
              <img src="media/google-play-badge.svg" alt="Kite Logo" className="img-fluid" />
            </a>
          </p>

        </div>
        
      </div>
    </div>
  );
}

export default LeftSection;
