import React, { useState } from 'react'
import Chart from "react-apexcharts";
const BubbleChart = () => {
  // bubble chart 
    const [state] = useState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept","Oct","Nov","Dec"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [25, 45, 50, 15, 23, 76, 89, 98,36,8,94,65],
        },
      ],
    });
  return <div className="bubblechart">
  {/* bubble chart using apexchart */}
 <Chart
              options={state.options}
              series={state.series}
              type="scatter"
              width="100%"
              height={"100%"}
            />
  </div>;
}

export default BubbleChart
