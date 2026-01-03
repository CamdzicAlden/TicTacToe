import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import OnePlayer from "./pages/OnePlayer";
import TwoPlayers from "./pages/TwoPlayers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/onePlayer" element={<OnePlayer />} />
      <Route path="/twoPlayers" element={<TwoPlayers />} />
    </Routes>
  );
}

export default App;
