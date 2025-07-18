import useTimer from "../hooks/useTimer";

function TimerDisplay() {
  const { timeLeft, isRunning, start, pause, reset, increment, decrement } =
    useTimer(300); // 5 minutes default

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <section>
      <button onClick={decrement}>–</button>
      <p>
        {mins < 10 && "0"}
        {mins}:{secs < 10 && "0"}
        {secs}
      </p>
      <button onClick={increment}>+</button>
      <div>
        {isRunning ? (
          <button onClick={pause}>Pause</button>
        ) : (
          <button onClick={start}>Start</button>
        )}
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}

export default TimerDisplay;
