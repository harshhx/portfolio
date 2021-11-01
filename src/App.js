import "./App.css";
import Header from "./components/header";
import Top from "./components/top";
import Confetti from "./components/confetti";
import NavbarT from "./components/navbar";
import { useEffect, useState } from "react";
import Mobile from "./components/mobile";
import Work from "./components/work_exp";

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
    (isMobile && <Mobile />) || (
      <div className="App">
        <NavbarT />
        <Top />
        <Skills />
        <Work />
      </div>
    )
  );
}

export default App;
