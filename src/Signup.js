import React from "react";
import $ from "jquery";
import SignupOtp from "./SignupOtp";
import { useState } from "react";
// https://digitalcard.kevalvavaliya.repl.co/signup
const Signup = () => {
  const [num, setNum] = useState();
  return (
    <div>
      <div className="signup-form s2">
        <input
          type="s-text"
          name=""
          id=""
          placeholder="phone"
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />

        <div className="s-btn">
          <button
            onClick={() => {
              $(".signup-form").animate({ right: "-80%" });
              $(".login-form").animate({ left: "10%" });
              $(".create").fadeIn();
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              fetch(
                "https://cors-anywhereforanyone.herokuapp.com/https://digitalcard.kevalvavaliya.repl.co/signup",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ mobileNo: "+91" + num }),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log("data = ", data);
                  document.cookie = `sid=${data.sid}`;
                  document.cookie = `num=+91${num}`;
                });
              $(".signup-form").animate({ left: "-100%" });
              $(".s-otp").animate({ right: "10%" });
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <SignupOtp />
    </div>
  );
};

export default Signup;
