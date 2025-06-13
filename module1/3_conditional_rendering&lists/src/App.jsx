import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainMenu from "./MainMenu";

function App() {
  const [user, setUser] = useState({ name: "", number: "" });

  return (
    <Router>
      <div className="bg-yellow-400 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/menu" element={<MainMenu user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
