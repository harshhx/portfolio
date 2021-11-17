import React, { useEffect } from "react";
import { Slide } from "@mui/material";
import { Image, Row, Col, Container } from "react-bootstrap";
import "./mobile.css";

function Mobile() {
  return (
    <div className="top">
      <div>
        <div className="text">I'm Harsh Gupta</div>
      </div>

      <Slide
        direction="up"
        in={true}
        mountOnEnter
        unmountOnExit
        style={{ transformOrigin: "0 0 0" }}
        {...(true ? { timeout: 2000 } : {})}
      >
        <div>
          <div className="about">
            <p>
              {/* I am a Bachelor of Engineering Student in Information Technology
              from MAIT Delhi. */}
              I am currently pursuing my under graduation in Information
              Technology Engineering from Maharaja Agrasen Institute of
              Technology in New Delhi. I mostly engage in Backend Development
              with satisfactory knowledge of frontend frameworks. I am a keen
              learner ready to learn new and exciting technologies.
            </p>
          </div>
          <div className="text" style={{ fontSize: "1em" }}>
            Please check the full version on web view.
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Mobile;
