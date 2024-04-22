import React from "react";
import Countdown from "react-countdown";
import Completionist from "./Completionist";

function CountdownClock() {
  return (
    <div className="justify-self-center">
      {" "}
      <Countdown className="timer-countdown" date={Date.now() + 10000}>
        <Completionist />
      </Countdown>
      
    </div>
  );
}

export default CountdownClock;
