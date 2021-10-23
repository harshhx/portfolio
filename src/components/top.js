import React from "react";
import { Slide } from "@mui/material";
import "./top.css";
function Top() {
  return (
    <div className="top">
      <div className="text">I'm Harsh Gupta</div>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
    {...(true ? { timeout: 2000 } : {})}>
      <div className="about">
        I am a Bachelor of Engineering Student in Information Technology from
        MAIT Delhi.
      </div>
      </Slide>
    </div>
  );
}

export default Top;
