import React from "react";
import { Route, Routes} from "react-router-dom";
import Apps from "./App";
import Funds from "./Funds";
import Holdings from "./Holding";

import Orders from "./Oders";
import Positions from "./Position";
import Summary from "./Summary";
import WatchList from "./Watchlist";
import { GeneralContextProvider } from "./GeneralContext";
import GeneralContext from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow";
import { useContext } from "react";
const DashboardContent = () => {
  const { isBuyWindowOpen, selectedStockUID, } = useContext(GeneralContext);
  return (

      <>
        <WatchList  />
        {isBuyWindowOpen && (<BuyActionWindow uid={selectedStockUID} />)}

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Holdings" element={<Holdings />} />
          <Route path="/Positions" element={<Positions />} />
          <Route path="/Funds" element={<Funds />} />
          <Route path="/Apps" element={<Apps />} />
        </Routes>
      </div>
    </>
  );
};
const Dashboard = () => (
  <div className="dashboard-container">
    <GeneralContextProvider>
      <DashboardContent />
    </GeneralContextProvider>
  </div>

)
  
export default Dashboard;