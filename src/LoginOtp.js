import React from "react";
import "./main.css";
import $ from "jquery";
const LoginOtp = () => {
  return (
    <div className="l-otp">
      <input type="text" name="" id="" placeholder="Enter otp" />
      <div className="l-otp-btns">
        <button
          onClick={() => {
            $(".login-form").animate({ left: "10%" });
            $(".l-otp").animate({ right: "-80%" });
          }}
        >
          Back
        </button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default LoginOtp;
