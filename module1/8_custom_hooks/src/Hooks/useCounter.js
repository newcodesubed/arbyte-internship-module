import { useState } from "react";

export function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => (c - step >= 0 ? c - step : 0));
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
