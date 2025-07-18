import { memo } from "react";
import { useToggle } from "./hooks/useToggle";

function ToggleSounds({ allowSound, setAllowSound }) {
  const [isOn, toggle] = useToggle(allowSound);

  const handleClick = () => {
    toggle();
    setAllowSound(!isOn);
  };

  return (
    <button className="btn-sound" onClick={handleClick}>
      {isOn ? "🔈" : "🔇"}
    </button>
  );
}

export default memo(ToggleSounds);
