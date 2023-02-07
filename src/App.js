import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./component/MainPage";
import Instructions from "./component/Instructions";
import Start from "./component/Start";
import HardLevel from "./component/HardLevel";
import MediumLevel from "./component/MediumLevel";
import EasyLevel from "./component/EasyLevel";
import Win from "./component/Win";
import Lose from "./component/Lose";

function App() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<MainPage />} /> */}
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/hardLevel" element={<HardLevel />} />
      <Route exact path="/mediumLevel" element={<MediumLevel />} />
      <Route exact path="/easyLevel" element={<EasyLevel />} />
      <Route exact path="/instructions" element={<Instructions />} />
      <Route exact path="/start" element={<Start />} />
      <Route exact path="/win" element={<Win />} />
      <Route exact path="/lose" element={<Lose />} />

      <Route path="*" element={<h1> 404 </h1>} />
    </Routes>
  );
}

export default App;
