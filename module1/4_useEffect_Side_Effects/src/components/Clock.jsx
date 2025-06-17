import { useState } from "react";
import useInterval from "../hooks/useInterval";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useInterval(() => {
    setTime(new Date());
  }, 1000);

  return <div className="clock">Current Time: {time.toLocaleTimeString()}</div>;
};

export default Clock;
