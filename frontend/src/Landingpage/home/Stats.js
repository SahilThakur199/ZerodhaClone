import React from "react";

function Stats() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-1">
        </div>
        <div className="col-4 mt-5">
          <h3 className="font-weight-bold mb-5">
            Trust with confidence
          </h3>
          <h5 className="mb-4">Customer-first always</h5>
          <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          <h5 className="mb-4">No spam or gimmicks</h5>
          <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#" style={{ textDecoration: "none" }}>Our philosophies.</a></p>
          <h5 className="mb-4">The Zerodha universe</h5>
          <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h5 className="mb-4">Do better with money</h5>
          <p className="text-muted">With initiatives like <a href="#" style={{ textDecoration: "none" }}>Nudge</a> and <a href="#" style={{ textDecoration: "none" }}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        
        <div className="col-6">
          <img src="media/ecosystem.png" alt="Stats" style={{ width: "100%", height: "auto", marginTop: "60px" }} className="mb-5" />

        </div>
      </div>
      <div>
        <img src="media/press-logos.png" alt="Press" style={{ width: "50%", height: "auto", marginTop: "60px" }} className="mb-5 d-block mx-auto" />
      </div>

    </div>
  );
}

export default Stats;
