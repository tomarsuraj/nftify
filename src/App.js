import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar";
import PairAddress from "./Pages/PairAddress";
import Token from "./Pages/Token";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState("token");
  return (
    <div className="App">
      <div className="row">
        <SideBar setMenu={setMenu} menu={menu} />
        {menu === "token" ? <Token /> : <PairAddress />}
      </div>

      <footer className="Footer bg-primary"></footer>
    </div>
  );
}

export default App;
