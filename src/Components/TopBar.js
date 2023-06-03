import React from "react";
import "./TopBar.css";

import search from "../assets/search.svg";

const TopBar = ({ val, setVal }) => {
  return (
    <div className="search">
      <div className="searchBar">
        <input
          placeholder="Search Here"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <img src={search} alt="" />
      </div>
      <div className="connect">Connect</div>
    </div>
  );
};

export default TopBar;
