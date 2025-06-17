import { useEffect, useState } from "react";
import Clock from "./Clock";

const JokePage = () => {
  const [loading, setLoading] = useState(true);
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      setJoke(data.joke);
    } catch (err) {
      setJoke("Failed to load joke.");
    }
  };

  useEffect(() => {
    console.log("Here you go anyway.");
    setTimeout(() => {
      fetchJoke();
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="container">
      <Clock />
      <h2>Dad Joke:</h2>
      {loading ? <p>Loading...</p> : <p className="joke">{joke}</p>}
    </div>
  );
};
export default JokePage;
