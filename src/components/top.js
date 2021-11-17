import React, { useEffect } from "react";
import { Slide } from "@mui/material";
import "./top.css";
import Confetti from "./confetti";
import { Image, Row, Col, Container } from "react-bootstrap";
import down from "./assets/down-arrow.svg";
import { width } from "@mui/system";
import Button from "@mui/material/Button";
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import program from "./assets/undraw_programmer_re_owql.svg";
import image from "./assets/Harsh Gupta Blob.png";
import skill from "./assets/undraw_working_late_re_0c3y.svg";
function Top() {
  const [loader, setLoader] = React.useState(false);

  useEffect(() => {
    for (var i = 0; i < 20; i++) {
      setTimeout(function () {
        setLoader(true);
      }, (i + i + 1) * 2500);
    }
  }, []);

  return (
    <div className="top">
      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            <Row>
              <Col>
                <Slide
                  direction="right"
                  in={true}
                  mountOnEnter
                  unmountOnExit
                  style={{ transformOrigin: "0 0 0" }}
                  {...(true ? { timeout: 2000 } : {})}
                >
                  <img
                    src={skill}
                    alt="Harsh Gupta"
                    style={{
                      width: "180px",
                      height: "180px",
                      marginTop: "15vh",
                    }}
                  />
                </Slide>
              </Col>
              <Col>
                <div className="text">I'm Harsh Gupta</div>
              </Col>
            </Row>

            <Slide
              direction="up"
              in={true}
              mountOnEnter
              unmountOnExit
              style={{ transformOrigin: "0 0 0" }}
              {...(true ? { timeout: 2000 } : {})}
            >
              <div className="about">
                {/* <p>
                  I am a Bachelor of Engineering Student in Information
                  Technology from MAIT Delhi.
                </p> */}
                <p>
                  I am currently pursuing my under graduation in Information
                  Technology Engineering from Maharaja Agrasen Institute of
                  Technology in New Delhi. I mostly engage in Backend
                  Development with satisfactory knowledge of frontend
                  frameworks. I am a keen learner ready to learn new and
                  exciting technologies.
                </p>
              </div>
            </Slide>
          </Col>
          <Col xs={6} md={4}>
            <Slide
              direction="down"
              in={true}
              mountOnEnter
              unmountOnExit
              style={{ transformOrigin: "0 0 0" }}
              {...(true ? { timeout: 2000 } : {})}
            >
              <Image src={image} className="image" />
            </Slide>
          </Col>
        </Row>
      </Container>
      {loader && <img className="down" src={down} />}
    </div>
  );
}

export default Top;
