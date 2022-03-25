import React from "react";
import { useState } from "react";
import $ from "jquery";
const Aadhar = () => {
  const [aadhar, setAadhar] = useState();
  const [name, setName] = useState();
  const [mail, setmail] = useState();
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
  return (
    <div className="aadhar">
      <i className="fa-solid fa-xmark a-cross"></i>
      <input
        type="text"
        name=""
        onChange={(e) => {
          setAadhar(e.target.value);
        }}
        placeholder="Aadhar number"
      />
      <input
        type="text"
        name=""
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        name=""
        placeholder="Email"
        onChange={(e) => {
          setmail(e.target.value);
        }}
      />
      <div className="a-btn">
        <button
          onClick={() => {
            fetch(
              "https://cors-anywhereforanyone.herokuapp.com/https://digitalcard.kevalvavaliya.repl.co/aadharVerify",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  aadharNo: aadhar,
                  mobileNo: d.num,
                  name: name,
                  email: mail,
                }),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.stcode === 102) {
                  $(".a-cross").fadeIn();
                } else {
                  $(".a-cross").fadeOut();
                }
                console.log("varify = ", data);
              });
          }}
        >
          Varify
        </button>
      </div>
    </div>
  );
};

export default Aadhar;
