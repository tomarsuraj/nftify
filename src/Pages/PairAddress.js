import React, { useEffect, useState } from "react";
import "./PairAddress.css";
import TopBar from "../Components/TopBar";
import DisplayPairs from "../Components/DisplayPairs";
const PairAddress = () => {
  const [data, setData] = useState({});
  const [val, setVal] = useState("");

  useEffect(() => {
    fetch(`https://api.dexscreener.com/latest/dex/search/?q=${val}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [val]);

  return (
    <div className="PairAddressContainer">
      <TopBar val={val} setVal={setVal} />
      <h3 className="heading ml-5">Pair Search Results</h3>

      <div className="ml-5">
        {data
          ? data.pairs
            ? data.pairs.map((value, index) => (
                <DisplayPairs data={value} key={index} />
              ))
            : ""
          : ""}
      </div>
    </div>
  );
};

export default PairAddress;
