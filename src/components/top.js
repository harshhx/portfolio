import React, { useEffect } from "react";
import { Slide } from "@mui/material";
import "./top.css";
import Confetti from "./confetti";
import { Image, Row, Col, Container } from "react-bootstrap";
import down from "./assets/down-arrow.svg";
import { width } from "@mui/system";
import Button from "@mui/material/Button";
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import image from "./assets/Harsh Gupta Blob.png";
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
            {/* <Button variant="contained" endIcon={<SendIcon />}> */}
            {/* {loader && (
              <Button className="btnc" variant="contained">
                Resume
              </Button>
            )} */}
            {/* <Confetti /> */}
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
