import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import JokePage from "./components/JokePage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/joke" element={<JokePage />} />
      </Routes>
    </Router>
  );
}

export default App;
