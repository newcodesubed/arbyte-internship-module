import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Do you want a random joke?</h1>
      <div className="button-group">
        <button onClick={() => navigate("/joke")}>Yes</button>
        <button onClick={() => navigate("/joke")}>No</button>
      </div>
    </div>
  );
};

export default LandingPage;
