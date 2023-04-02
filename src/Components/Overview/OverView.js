import React from "react";
import BubbleChart from "./BubbleChart";
import Leftside from "../Leftside";

import BarChart from "../Salesfig";
const OverView = () => {
  // overview page 
  return (
    <div className="overview">
      <BubbleChart />
      <Leftside />
      <BarChart />
    </div>
  );
};

export default OverView;
