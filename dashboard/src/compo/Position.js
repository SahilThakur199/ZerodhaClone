import React from "react";
// import { positions } from "../data/data";
import axios from "axios";
import { useState, useEffect } from "react";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get("http://localhost:3002/positions").then((result) => {
          console.log("Positions data:", result.data);
          setPositions(result.data);
        });
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((position) => (
            <tr key={position.name}>
              <td>{position.product}</td>
              <td>{position.name}</td>
              <td>{position.qty}</td>
              <td>{position.avg}</td>
              <td>{position.price}</td>
              <td>{position.net}</td>
              <td>{position.day}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Positions;