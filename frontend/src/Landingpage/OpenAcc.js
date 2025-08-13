import React from "react";

function OpenAcc({ heading, ContPara }) {
  return (
    <div className="text-center mb-5">
      <h1>{heading}</h1>
      <p>{ContPara}</p>
      <button className="btn btn-primary w-25 h-45">Sign up for free</button>
    </div>
  );
}

export default OpenAcc;
