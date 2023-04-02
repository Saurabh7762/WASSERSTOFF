import React from 'react'
import { BarChart,Bar } from 'recharts'
const Salesfig = () => {
  // bar charts shows the sales figer data 
    const data = [
      {value: 15 },
      {value: 20 },
      {value: 10 },
      {value: 13 },
      {value: 16 },
      {value: 11 },
      {value: 20 },
      {value: 30 },
    ];
  return (
    <div className="barchart">
    {/* title of bar chart  */}
      <div className="sales-figer" style={{margin:"0px", padding:"0px"}}>
        <h3 style={{ color: "#383874", fontWeight: "700",paddingRight:"15px" }}>
          <span style={{fontSize:"13px"}}>Sales Figer</span> <br /> <span>$10,430</span>
        </h3>
      </div>
      {/* bar chart or graph  */}
      <div className="graph" style={{ display: "flex",margin:"0px",padding:"0px" }}>
        <BarChart width={200} height={50} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={200} height={50} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={200} height={50} data={data}>
          <Bar dataKey="value" fill="#FF708B" />
        </BarChart>
        <BarChart width={200} height={50} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={200} height={50} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={50} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default Salesfig;
