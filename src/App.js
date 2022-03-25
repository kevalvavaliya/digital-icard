import React from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="body">
      <div className="container">
        <div className="container2">
          <Navbar />
          <div className="text">
            <span>One point student verification</span>
          </div>
          <Main />
        </div>
      </div>
      <div className="success-popup">
        <div className="sucess-text">
          <span>User Registered Successfully</span>
          <i className="fa-solid fa-badge-check right"></i>
          <button>OK</button>
        </div>
      </div>
    </div>
  );
}

export default App;
