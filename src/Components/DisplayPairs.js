import React from "react";
import "./DisplayPairs.css";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
const DisplayPairs = ({ data }) => {
  const date = new Date(data?.pairCreatedAt);
  return (
    <div className="container">
      <div className="card">
        <h4>Basic Info</h4>
        <div className="card-row">
          <div>
            <p>Pair created at</p>
          </div>
          <div>
            <p>{date.toLocaleTimeString()}</p>
            <p>{date.toDateString()}</p>
          </div>
        </div>
        <div className="card-row">
          <div>
            <p>Symbol</p>
          </div>
          <div>
            <p>{data?.baseToken?.symbol}</p>
          </div>
        </div>
        <div className="card-row">
          <div>
            <p>Dex ID</p>
          </div>
          <div>
            <p>{data?.dexId}</p>
          </div>
        </div>
        <div className="card-row">
          <div>
            <p>Pair Address</p>
          </div>
          <div>
            <p>#{data?.pairAddress.slice(2, 6)}</p>
          </div>
        </div>
        <div className="floatingButton">
          <img src={icon1} alt="icon1" />
        </div>
      </div>
      <div className="card">
        <h4>Base Token</h4>
        <div className="card-row">
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>{data?.baseToken?.name}</p>
          </div>
        </div>
        <div className="card-row">
          <div>
            <p>Symbol</p>
          </div>
          <div>
            <p>{data?.baseToken?.symbol}</p>
          </div>
        </div>
        <div className="card-row">
          <div>
            <p>Address</p>
          </div>
          <div>
            <p>#{data?.baseToken?.address.slice(2, 6)}</p>
          </div>
        </div>
        <div className="floatingButton">
          <img src={icon2} alt="icon2" />
        </div>
      </div>
      <div className="card">
        <h4>Quote Token</h4>
        <div className="card-row">
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>{data?.quoteToken?.name}</p>
          </div>
        </div>
        <div className="card-row">
          <div>
            <p>Symbol</p>
          </div>
          <div>
            <p>{data?.quoteToken?.symbol}</p>
          </div>
        </div>
        <div className="card-row">
          <div>
            <p>Address</p>
          </div>
          <div>
            <p>#{data?.quoteToken?.address.slice(2, 6)}</p>
          </div>
        </div>
        <div className="floatingButton">
          <img src={icon2} alt="icon2" />
        </div>
      </div>
      <div className="card">
        <h4>price</h4>
        <div className="card-row">
          <div>
            <p>Price Native</p>
          </div>
          <div>
            <p>{data?.priceNative}</p>
          </div>
        </div>
        <div className="card-row">
          <div>
            <p>Price USD</p>
          </div>
          <div>
            <p>{data?.priceUsd}</p>
          </div>
        </div>
        <div className="floatingButton">
          <img src={icon2} alt="icon2" />
        </div>
      </div>
    </div>
  );
};

export default DisplayPairs;
