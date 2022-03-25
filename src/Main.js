import React from "react";
// import video from "./vid.mp4";
import "./main.css";
import $ from "jquery";
import Signup from "./Signup";
import Login from "./Login";
import LoginOtp from "./LoginOtp";
const Main = () => {
  return (
    <div className="img-form">
      <div className="imgs">
        <video
          muted
          autoPlay
          preload="auto"
          loop
          width={"100%"}
          height={"100%"}
        >
          <source src={require("./vid.mp4")} type="video/ogg" />
        </video>
      </div>
      <div className="forms">
        <div className="form">
          <div className="head-text">
            <h1>Welcome</h1>
          </div>
          <div className="switch-forms">
            <button className="active">Student</button>
            <button>Principle</button>
            <button>University</button>
          </div>
          <div className="inner-forms">
            <Login />
            <Signup />
          </div>
        </div>
        <div
          className="create"
          onClick={() => {
            console.log("clicked");
            $(".login-form").animate({ left: "-100%" });
            $(".signup-form").animate({ right: "10%" });
            $(".create").fadeOut();
          }}
        >
          <span>Create Account</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
