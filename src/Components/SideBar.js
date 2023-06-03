import React from "react";
import "./SideBar.css";
import logo from "../assets/logo.svg";
import tokenLogo from "../assets/tokenLogo.svg";
import pairLogo from "../assets/pairLogo.svg";
import facebook from "../assets/facebook.svg";
import linkdin from "../assets/linkdin.svg";
import twitter from "../assets/twitter.svg";
const SideBar = ({ menu, setMenu }) => {
  return (
    <div className="SideBarContainer">
      <div>
        <div className="row pl-5  mt-5">
          <img src={logo} alt="LOGO" />
          <p className="ml-5 logo">nFTify</p>
        </div>

        <div
          className={`row mt-5 p-4 ${menu === "token" ? " bg-primary" : ""}`}
          onClick={() => {
            setMenu("token");
          }}
        >
          <img src={tokenLogo} alt="LOGO" />
          <p className="ml-5 linktext">Token Address</p>
        </div>

        <div
          className={`row mt-5 p-4 ${menu === "token" ? "" : " bg-primary"}`}
          onClick={() => {
            setMenu("pair");
          }}
        >
          <img src={pairLogo} alt="LOGO" />
          <p className="ml-5 linktext">Pair Address</p>
        </div>
      </div>

      <div className="pl-5">
        <img src={facebook} alt="LOGO" className="m-3" />
        <img src={linkdin} alt="LOGO" className="m-3" />
        <img src={twitter} alt="LOGO" className="m-3" />
      </div>
    </div>
  );
};

export default SideBar;
