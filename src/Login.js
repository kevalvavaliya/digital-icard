import React from "react";
import $ from "jquery";
import LoginOtp from "./LoginOtp";
const Login = () => {
  return (
    <div>
      <div className="login-form">
        <input type="text" name="" id="" placeholder="Unique Id" />
        <div className="btn">
          <button
            onClick={() => {
              $(".login-form").animate({ left: "-100%" });
              $(".otp").animate({ right: "10%" });
            }}
          >
            Send otp
          </button>
        </div>
      </div>
      <LoginOtp />
    </div>
  );
};

export default Login;
