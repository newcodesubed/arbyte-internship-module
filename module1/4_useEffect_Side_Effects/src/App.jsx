import { useEffect } from "react";
function App() {
  useEffect(function () {
    alert("Component mounted");
  }, []);
  return <p>You are using this app</p>;
}

export default App;
