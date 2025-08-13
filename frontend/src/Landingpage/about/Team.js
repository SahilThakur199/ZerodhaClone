import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center my-5">People</h3>
      </div>
      <div className="row">
        <div className="col-1">
        </div>
        <div className="col-5 text-center mr-5">
          <img
            src="media/Sahil.png.jpg"
            alt="Team Member 1"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "80%", height: "80%", }}
          />
          <h5>Sahil</h5>
          <p>Founder & CEO</p>
        </div>
        <div className="col-5 mr-5 " style={{ textAlign: "left", fontSize: "1.2rem" }}>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing Cricket is his zen.</p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Team;
