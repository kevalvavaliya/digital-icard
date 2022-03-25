import React from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";
import $ from "jquery";
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
      <div className="body">
        <div className="temp">
          <div className="success-popup">
            <div className="sucess-text">
              <h3>User Registered Successfully</h3>
            </div>
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_jtl6gife.json"
              background="transparent"
              speed="1"
              loop
              style={{ width: "200px", height: "200px", marginTop: "-2rem" }}
              autoplay
            ></lottie-player>
            <button
              onClick={() => {
                $(".temp").fadeOut();
                setTimeout(() => {
                  $(".body").hide();
                }, 1500);
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
