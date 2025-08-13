import React from "react";

function Hero() {
  return (
  <div className="w-100" style={{ minheight: "100vh", backgroundColor: "#f8f9fa" }}> 
    <div className="container bg-light">
      <div className="row">
        <div className="col-6 mb-5 mt-5">
          <h1>Support</h1>
        </div>
        <div className="col-6 mb-5 mt-5">
          <button className="btn btn-primary float-end mt-3">My ticket</button>
        </div>

      </div>
      <div className="row mb-5">
        <div className="col-12 mb-5">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search" style={{ width: "100%" }}>
                <input className="form-control me-2" type="search" placeholder="Eg: How do I open my Account?" aria-label="Search"/>

              </form>
             </div>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
