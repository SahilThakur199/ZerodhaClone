import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container mt-5">
        <div className="row">
            <div className="col-1"></div>
            <div className="col-2 mt-3 ">
                <img src="media/Zerodhalogo.svg" style={{ width: "70%", height: "10%" }} alt="Logo" className=" footer-logo" />
                <p>© 2023 Zerodha Clone</p>
            </div>
            <div className="col-2 mt-3 ">
                <h4>Account</h4>
                <ul className="list-unstyled lh-lg ">
                    <li ><a href="#" style={{ textDecoration: "none", color: "black" }}>Open Demat account</a></li>
                    <li><a href="#"style={{ textDecoration: "none", color: "black" }}>Minor Demat account</a></li>
                    <li><a href="#"style={{ textDecoration: "none", color: "black" }}>NRI Demat account</a></li>
                    <li><a href="#"style={{ textDecoration: "none", color: "black" }}>Commodity</a></li>
                    <li><a href="#"style={{ textDecoration: "none", color: "black" }}>Dematerialization</a></li>
                    <li><a href="#"style={{ textDecoration: "none", color: "black" }}>Fund Transfer</a></li>
                    <li><a href="#"style={{ textDecoration: "none", color: "black" }}>MTF</a></li>
                    <li><a href="#"style={{ textDecoration: "none", color: "black" }}>Referral Program</a></li>
                </ul>
            </div>
            <div className="col-2 mt-3">
                <h4>Support</h4>
                <ul className="list-unstyled lh-lg ml-5">
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Contact Us</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Support Portal</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>How to file a complaint?</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Status of your complaint</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Bulletin</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Circular</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Z-connect blog</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Downloads</a></li>
                </ul>
            </div>
            <div className="col-2 mt-3">
                <h4>Company</h4>
                <ul className="list-unstyled lh-lg">
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>About</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Philosophy</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Press & Media</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Careers</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Zerodha cares (CSR)</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Zerodha.tech</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Open Source</a></li>

                </ul>
            </div>
            <div className="col-2 mt-3">
                <h4>Quick links</h4>
                <ul className="list-unstyled lh-lg">
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Upcoming IPOs</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Brokerage Charges</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Market Holiday</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Economic Calendar</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Calculator </a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Market</a></li>
                    <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Sector</a></li>

                </ul>
            </div>
            <div className="col-1 "></div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

