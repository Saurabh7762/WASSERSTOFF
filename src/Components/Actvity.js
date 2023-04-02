import React from 'react'

const Actvity = (props) => {
  return (
    //  active and new users
    <div className="active">
      <div
        className="active-users"
        style={{
          background: `conic-gradient(${props.color} ${props.percentage},lightgray 30%)`,
        }}
      >
        <div style={{ color: "#383874", fontWeight: "300" }}>
          {props.percentage}
        </div>
      </div>
      <p style={{ paddingLeft: "0.5rem", color: "#383874", fontWeight: "300" }}>
        <span>{props.title}</span>
        <br />
        <span>{props.user}</span>
      </p>
    </div>
  );
};

export default Actvity;
