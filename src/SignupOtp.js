import React, { useState } from "react";
import $ from "jquery";
import Aadhar from "./Aadhar";
import "./main.css";
const SignupOtp = () => {
  const [otp, setOtp] = useState();
  return (
    <div>
      <div className="s-otp">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter otp"
          onChange={(e) => {
            setOtp(e.target.value);
          }}
        />
        <i className="fa-solid fa-xmark cross"></i>
        <div className="s-otp-btns">
          <button
            onClick={() => {
              $(".s-otp").animate({ right: "-80%" });
              $(".s2").animate({ left: "10%" });
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              const d = document.cookie
                .split(";")
                .map((e) => e.split("="))
                .reduce(
                  (acc, [k, v]) => ({
                    ...acc,
                    [k.trim()]: decodeURIComponent(v),
                  }),
                  {}
                );
              fetch(
                "https://cors-anywhereforanyone.herokuapp.com/https://digitalcard.kevalvavaliya.repl.co/verifyOtp",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    sid: d.sid,
                    mobileNo: d.num,
                    otp: otp,
                    msg: "signup",
                  }),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  if (data.status === "approved") {
                    // $(".form").animate({ heigth: "420px" });
                    document.querySelector(".form").style.height = "420px";
                    $(".s-otp").animate({ left: "-100%" });
                    $(".aadhar").animate({ right: "10%" });
                  } else if (data.status === "pending") {
                    $(".cross").fadeIn();
                  }
                  console.log("varify = ", data);
                });
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <Aadhar />
    </div>
  );
};

export default SignupOtp;
