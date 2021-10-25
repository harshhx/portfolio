import React from "react";
import { Slide } from "@mui/material";
import "./top.css";
import Confetti from "./confetti";
import { Image, Button, Row, Col, Container } from "react-bootstrap";
import image from "./assets/harsh.jpg";
import { width } from "@mui/system";

function Top() {
  return (
    <div className="top">
      <Container fluid>
        <Row>
        <Col xs={12} md={8}>
            <div className="text">I'm Harsh Gupta</div>
            <Slide
              direction="up"
              in={true}
              mountOnEnter
              unmountOnExit
              style={{ transformOrigin: "0 0 0" }}
              {...(true ? { timeout: 2000 } : {})}
            >
              <div className="about">
                <p>
                  I am a Bachelor of Engineering Student in Information
                  Technology from MAIT Delhi.
                </p>
              </div>
            </Slide>
            {/* <Confetti /> */}
          </Col>
          <Col xs={6} md={4}>
            {/* <Image className="text" src={image} className="image" roundedCircle /> */}   
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Top;
