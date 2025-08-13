import React from "react";

function Fees({ imgsrc, caption }) {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <img src={imgsrc} alt= "symbol" style={{ width: "100%", height: "auto" }} />
                    <p>{caption}</p>
                </div>

            </div>
        </div>
    );
}
export default Fees;