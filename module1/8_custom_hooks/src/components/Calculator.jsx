import { memo, useEffect, useState } from "react";
import clickSound from "../ClickSound.m4a";
import { useCounter } from "../hooks/useCounter";

function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);

  const [calculatedDuration, setCalculatedDuration] = useState(0);

  const durationCounter = useCounter(0);

  useEffect(() => {
    const computed = (number * sets * speed) / 60 + (sets - 1) * durationBreak;

    setCalculatedDuration(computed);
    durationCounter.reset();
  }, [number, sets, speed, durationBreak, durationCounter]);

  useEffect(() => {
    if (!allowSound) return;
    const sound = new Audio(clickSound);
    sound.play();
  }, [calculatedDuration, allowSound]);

  const totalDuration = calculatedDuration + durationCounter.count;

  const mins = Math.floor(totalDuration);
  const seconds = Math.round((totalDuration - mins) * 60);

  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={(e) => setNumber(+e.target.value)}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={(e) => setSets(Number(e.target.value))}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            type="range"
            min="30"
            max="180"
            step="30"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => setDurationBreak(Number(e.target.value))}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>

      <section>
        <button onClick={durationCounter.decrement}>–</button>
        <p>
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </p>
        <button onClick={durationCounter.increment}>+</button>
      </section>
    </>
  );
}

export default memo(Calculator);
