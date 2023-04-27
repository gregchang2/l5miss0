import React from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import TCGrid from "./components/twocgrid";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <TCGrid></TCGrid>
      <div className="foot">
        <img src="/Untitled.png" alt="dsglogoblack"></img>
      </div>
    </div>
  );
}

export default App;
