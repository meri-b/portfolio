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
      </Routes>

    </Router>
  );
}

export default App;
