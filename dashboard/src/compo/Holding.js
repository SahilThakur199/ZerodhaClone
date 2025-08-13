import React from "react";
// import { holdings } from "../data/data";
import axios from "axios";
import { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        axios.get("http://localhost:3002/holdings").then((response) => {
          console.log("Holdings data:", response.data);
          setHoldings(response.data);
        });
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };
    fetchHoldings();
    
  }, []);
  const labels = holdings.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: holdings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings (13)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {holdings.map((holding) => (
            <tr key={holding.name}>
              <td>{holding.name}</td>
              <td>{holding.qty}</td>
              <td>{holding.avg}</td>
              <td>{holding.price}</td>
              <td>{holding.curVal}</td>
              <td>{holding.pnl}</td>
              <td>{holding.net}</td>
              <td>{holding.day}</td>
            </tr>
          ))}
          
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;