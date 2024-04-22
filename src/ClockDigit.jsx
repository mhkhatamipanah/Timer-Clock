import React from "react";
import ReactAwesomeClock from "react-awesome-clock";

class ClockDigit extends React.Component {
  render() {
    return (
      <div className="margin-top-2">
     
        <ReactAwesomeClock style={{ color: "black", fontSize: 70 }} />
        {/* <ReactAwesomeClock
          day={true}
          style={{
            color: "grey",
            fontSize: 60,
            textShadow: "0 0 10px grey",
            fontFamily: "aerial"
          }}
        />
        // Clock Component With Days Count
        <ReactAwesomeClock
          day={true}
          style={{ color: "lightGrey", fontSize: 70 }}
          startDate="2018-09-06"
        /> */}
      </div>
    );
  }
}

export default ClockDigit