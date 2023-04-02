import React from "react";
import { BiTrendingUp, BiCrown, BiBarChartAlt2 } from "react-icons/bi";
import Actvity from "./Actvity";
import Distributes from "./Distribution";
const Leftside = () => {
  // sidebar for all users analize with distribution 
  return (
    <div style={{ background: "red" }}>
      <div className="sidebar">
        <div className="sidebar-heading div">
          <p className="users">
            All Users <span>DETAILS</span>
          </p>
          <p className="total-user">2,431,340</p>
        </div>
        {/* ----distributes components--- */}
        <div className="distributes">
          <Distributes
            title="Total Earning"
            count="540,549"
            bg="#8676FF"
            icon={
              <BiTrendingUp
                size="25"
                color="white"
                style={{
                  height: "35px",
                  width: "35px",
                  border: "2px solid white",
                  borderRadius: "50%",
                }}
              />
            }
          />
          <Distributes
            title="Sales"
            count="1,205,677"
            bg="#66C8FF"
            icon={<BiCrown size="30" color="white" />}
          />
          <Distributes
            title="Purchase"
            count="48,430,039"
            bg="#FF9066"
            icon={<BiBarChartAlt2 size="30" color="white" />}
          />
        </div>
        {/* users and new users--- activeNewUser components*/}
        <div className="percentage-circle">
          <Actvity
            title="92,980"
            color="blue"
            user="Active Users"
            percentage="45%"
          />
          <Actvity
            title="22,652"
            color="green"
            user="New Users"
            percentage="80%"
          />
        </div>
      </div>
    </div>
  );
};

export default Leftside;
