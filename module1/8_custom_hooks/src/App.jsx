import { useEffect, useMemo, useState } from "react";
import Calculator from "./components/Calculator";
import ToggleSounds from "./components/ToggleSounds";
import TimerDisplay from "./components/TimerDisplay";
import FormWizard from "./components/FormWizard";
import useToggle from "./hooks/useToggle";

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function App() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));
  const [showFormWizard, toggleFormWizard] = useToggle(false);

  const partOfDay = time.slice(-2);

  const workouts = useMemo(
    () => [
      { name: "Full-body workout", numExercises: partOfDay === "AM" ? 9 : 8 },
      { name: "Arms + Legs", numExercises: 6 },
      { name: "Arms only", numExercises: 3 },
      { name: "Legs only", numExercises: 4 },
      { name: "Core only", numExercises: partOfDay === "AM" ? 5 : 4 },
    ],
    [partOfDay]
  );

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <h1>Workout timer</h1>
      <time>For your workout on {time}</time>
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator workouts={workouts} allowSound={allowSound} />
      <TimerDisplay />
      <button onClick={toggleFormWizard}>
        {showFormWizard ? "Hide" : "Show"} Form Wizard
      </button>
      {showFormWizard && <FormWizard />}
    </main>
  );
}

export default App;
