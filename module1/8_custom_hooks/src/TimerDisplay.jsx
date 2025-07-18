import { useTimer } from "./hooks/useTimer";

function TimerDisplay() {
  const { time, isRunning, start, pause, reset } = useTimer();

  const mins = Math.floor(time / 60);
  const secs = time % 60;

  return (
    <section>
      <h2>⏳ Timer</h2>
      <p>
        {mins < 10 && "0"}
        {mins}:{secs < 10 && "0"}
        {secs}
      </p>
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={pause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={reset}>Reset</button>
    </section>
  );
}

export default TimerDisplay;
