import React from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <div className="container">
        <div className="container2">
          <Navbar />
          <div className="text">
            <span>One point student verification</span>
          </div>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
