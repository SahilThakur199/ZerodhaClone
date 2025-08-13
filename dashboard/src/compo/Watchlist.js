import React from "react";
import { watchlist } from "../data/data";
import { useState, useContext } from "react"; 
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz,} from "@mui/icons-material";
import {Tooltip, Grow} from "@mui/material"
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> 9 / 50</span>
      </div>

      <ul className="list">
        {watchlist.map(stock => {
          return (<WatchListItem stock={stock} key={stock.name}  />);
        })}
        
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {

  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = (e) => {
    setShowInfo(true);
  };

  const handleMouseLeave = (e) => {
    setShowInfo(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
           <KeyboardArrowDown className="down" /> 
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
          {<ShowWatchListAction uuid={stock.name}/>}
    </li>
  );
};

const ShowWatchListAction = ({uuid}) => {
  const { openBuyWindow } = useContext(GeneralContext);
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => openBuyWindow(uuid)}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Chart" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="btn">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};