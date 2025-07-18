import { useEffect, useReducer } from "react";

function timerReducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "pause":
      return { ...state, isRunning: false };
    case "reset":
      return { timeLeft: action.payload, isRunning: false };
    case "tick":
      return {
        ...state,
        timeLeft: state.timeLeft > 0 ? state.timeLeft - 1 : 0,
      };
    case "increment":
      return { ...state, timeLeft: state.timeLeft + 60 }; // +1 min
    case "decrement":
      return {
        ...state,
        timeLeft: state.timeLeft > 60 ? state.timeLeft - 60 : 0,
      };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export default function useTimer(initialTime) {
  const [state, dispatch] = useReducer(timerReducer, {
    timeLeft: initialTime,
    isRunning: false,
  });

  useEffect(() => {
    let timer;
    if (state.isRunning && state.timeLeft > 0) {
      timer = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state.isRunning, state.timeLeft]);

  const start = () => dispatch({ type: "start" });
  const pause = () => dispatch({ type: "pause" });
  const reset = () => dispatch({ type: "reset", payload: initialTime });
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return {
    timeLeft: state.timeLeft,
    isRunning: state.isRunning,
    start,
    pause,
    reset,
    increment,
    decrement,
  };
}
