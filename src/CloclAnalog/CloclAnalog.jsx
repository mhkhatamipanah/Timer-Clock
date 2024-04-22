import React from "react";
import { useRef } from "react";
import "./style.css";
function CloclAnalog() {
  const inputHr = useRef(null);
  const inputMn = useRef(null);
  const inputSc = useRef(null);
  const deg = 6; //360deg / 60(min||sec) => 6
  // const hr = document.querySelector("#hr");
  // const mn = document.querySelector("#mn");
  // const sc = document.querySelector("#sc");

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30; //360deg / 12 hour => 30
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

        if (inputHr.current) {
      inputHr.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    }
    if (inputMn.current) {
      inputMn.current.style.transform = `rotateZ(${mm}deg)`;
    }
    if (inputSc.current) {
        inputSc.current.style.transform = `rotateZ(${ss}deg)`;
      }
  });
  return (
    <div class="clock justify-self-center">
      <div class="hour">
        <div class="hr" ref={inputHr} id="hr"></div>
      </div>
      <div class="min">
        <div class="mn" ref={inputMn} id="mn"></div>
      </div>
      <div class="sec">
        <div class="sc" ref={inputSc} id="sc"></div>
      </div>
    </div>
  );
}

export default CloclAnalog;
