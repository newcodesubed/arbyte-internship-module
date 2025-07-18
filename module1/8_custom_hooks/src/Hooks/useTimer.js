import { useReducer, useEffect } from "react";

function timerReducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "PAUSE":
      return { ...state, isRunning: false };
    case "RESET":
      return { ...state, time: 0, isRunning: false };
    case "TICK":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error("Unknown action");
  }
}

export function useTimer() {
  const [state, dispatch] = useReducer(timerReducer, {
    time: 0,
    isRunning: false,
  });

  useEffect(() => {
    if (!state.isRunning) return;

    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.isRunning]);

  const start = () => dispatch({ type: "START" });
  const pause = () => dispatch({ type: "PAUSE" });
  const reset = () => dispatch({ type: "RESET" });

  return { time: state.time, isRunning: state.isRunning, start, pause, reset };
}
