import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Reel from "./components/Reel";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Home from "./components/Home";

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
      </Routes>
    </Router>
  );
}

export default App;
