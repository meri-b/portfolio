import About from "./components/About";
import Projects from "./components/Projects";
import Reel from "./components/Reel";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Reel />
    </div>
  );
}

export default App;
