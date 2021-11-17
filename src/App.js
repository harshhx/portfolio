import "./App.css";
import Top from "./components/top";
import Confetti from "./components/confetti";
import NavbarT from "./components/navbar";
import { useEffect, useState } from "react";
import Mobile from "./components/mobile";
import Work from "./components/work_exp";
import Education from "./components/education";
import Projects from "./components/projects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Skills from "./components/skills";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  return (
    (mobile && <div><Mobile /></div> ) || (
      <div className="App">
        <NavbarT />
        <Confetti />
        <Top />
        <Skills />
        <Work />
        <Projects />
        <Education />
      </div>
    )
    // <Router>
    //   <Routes>
    //     <Route path="/" component={Skills} />
    //   </Routes>
    // </Router>
  );
}

export default App;
