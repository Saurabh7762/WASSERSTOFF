import React from 'react'
import { Link } from "react-router-dom";
import { IoLogoWordpress } from "react-icons/io";
const Header = () => {
  // navbar section 
  return (
    <div className="header aline-items">
      {/* logo and name  */}
      <div className="logo-name">
        <div className="outer">
          <IoLogoWordpress size="25" />
        </div>
        {/* title of organization  */}
        <p>WASSERSTOFF</p>
      </div>
      <div className="header-list">
        <div className="search-bar">
          {/* search box  */}
          <input type="search" name="search" id="search" />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        {/* unordered list  */}
        <ul className="header-navbar">
          <li>
            <Link to="/">Statistics</Link>
          </li>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="#">Analytics</Link>
          </li>
        </ul>
      </div>
      {/* users profile  */}
      <div className="profile">
        <span>
          <i className="fa-solid fa-user"></i>
        </span>
        <span>
          <i className="fa-solid fa-list"></i>
        </span>
      </div>
    </div>
  );
}

export default Header
