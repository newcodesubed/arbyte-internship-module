import { useState, useEffect } from "react";

export const useFakeQuery = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(["Monitor - Black", "Keyboard - White", "Mouse - Black"]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
};
