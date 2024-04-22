import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ClockDigit from "./ClockDigit";
import CloclAnalog from "./CloclAnalog/CloclAnalog";
import CountdownClock from "./CountdownTimer/CountdownClock";

const formatTime = (timer) => {
  console.log(timer);
  const getSeconds = `0${timer}`.slice(-2);
  const minutes = `${Math.floor(timer / 100)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

const Timer = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  return (
    <div className="app">
      <h3 className="title-stop-watch">React Stopwatch</h3>
      <div className="stopwatch-card">
        <div className="realative-stopwatch">
          <section className="container-text-timer">
            <p>{formatTime(timer)}</p>
          </section>
          <div className="buttons">
            {!isActive && !isPaused ? (
              <button
                className="btn-stopwatch button   green"
                onClick={handleStart}
              >
                Start
              </button>
            ) : isPaused ? (
              <button
                className="btn-stopwatch  button yellow"
                onClick={handlePause}
              >
                Pause
              </button>
            ) : (
              <button
                className="btn-stopwatch  button white"
                onClick={handleResume}
              >
                Resume
              </button>
            )}
            <button
              className=" button red"
              onClick={handleReset}
              disabled={!isActive}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = React.useState(initialState);
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const countRef = React.useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
};

const App = () => <Timer />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container-watch-timer">
      <App />
      <CountdownClock/>
      <CloclAnalog/>
      <ClockDigit />
    </div>
  </React.StrictMode>
);
