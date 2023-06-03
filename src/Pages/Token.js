import React, { useEffect, useState } from "react";
import "./Token.css";
import TopBar from "../Components/TopBar";
import DisplayPairs from "../Components/DisplayPairs";

const Token = () => {
  const [data, setData] = useState({});
  const [val, setVal] = useState("");

  useEffect(() => {
    fetch(`https://api.dexscreener.com/latest/dex/tokens/${val}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [val]);

  console.log(data, `https://api.dexscreener.com/latest/dex/tokens/${val}`);
  return (
    <div className="tokenContainer">
      <TopBar val={val} setVal={setVal} />
      <h3 className="heading ml-5">Token Search Results</h3>

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

export default Token;
