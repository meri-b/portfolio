import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Reel from "./components/Reel";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Home from "./components/Home";

import GraphicImpulse1 from "./components/projects/graphicimpulse1";
import GraphicImpulse2 from "./components/projects/graphicimpulse2";
import Buddy from "./components/projects/buddy";
import Worm from "./components/projects/worm";
import BeerQuest from "./components/projects/beerquest";
import Underflow from "./components/projects/underflow";
import Stardust from "./components/projects/stardust";
import CuriousBones from "./components/projects/curiousbones";
import UnravelDeath from "./components/projects/death";
import Inanimate48 from "./components/projects/inanimate48";
import PSONatls from "./components/projects/psonatls";
import SockThief from "./components/projects/sockthief";
import Zabiti from "./components/projects/zabiti";
import Gnome from "./components/projects/gnome";
import Miniramp from "./components/projects/miniramp";
import SlatedForDemolition from "./components/projects/slatedfordemolition";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/reel" element={<Reel />} />

        <Route path="/projects/graphicimpulse1" element={<GraphicImpulse1 />} />
        <Route path="/projects/graphicimpulse2" element={<GraphicImpulse2 />} />
        <Route path="/projects/buddy" element={<Buddy />} />
        <Route path="/projects/worm" element={<Worm />} />
        <Route path="/projects/beerquest" element={<BeerQuest />} />
        <Route path="/projects/underflow" element={<Underflow />} />
        <Route path="/projects/stardust" element={<Stardust />} />
        <Route path="/projects/curious-bones" element={<CuriousBones />} />
        <Route path="/projects/unravel-death" element={<UnravelDeath />} />
        <Route path="/projects/inanimate48" element={<Inanimate48 />} />
        <Route path="/projects/miniramp" element={<Miniramp />} />
        <Route path="/projects/gnome" element={<Gnome />} />
        <Route path="/projects/psonatls" element={<PSONatls />} />
        <Route path="/projects/sockthief" element={<SockThief />} />
        <Route path="/projects/zabiti" element={<Zabiti />} />
        <Route path="/projects/slatedfordemolition" element={<SlatedForDemolition />} />

      </Routes>

    </Router>
  );
}

export default App;