import React from "react";

function RightSection({ Rimage, Rheading, Rpara, Rcontent1, Rlink1,}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-4 " style={{ textAlign: "left", padding: "20px", marginTop: "13%" }}>
          <h4>{Rheading}</h4>
          <p>{Rpara}</p>
          <a href={Rlink1} target="_blank" rel="noopener noreferrer" className="" style={{ textDecoration: "none", paddingRight: "5px" }}>
            {Rcontent1}
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 ">
          <img src={Rimage} alt="Product" className="" />
        </div>
        <div className="col-1"></div>
      </div>
     
      
    </div>
  );
}
export default RightSection;
