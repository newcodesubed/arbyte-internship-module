import { useState } from "react";

export function useToggle(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);
  const toggle = () => setIsOn((prev) => !prev);

  return [isOn, toggle];
}
