import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import sh1 from "../assets/shape-1.svg";
import sh2 from "../assets/shape-2.svg";
import sh3 from "../assets/shape-3.svg";
import sh6 from "../assets/shape-6.svg";
import homeImg from "../assets/hero-img.png";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };

  const shape1 = {
    left: 0,
    right: 0,
    margin: "auto",
    top: "90px",
    position: "absolute",
  };

  const shape2 = {
    right: "380px",
    top: "280px",
    position: "absolute",
  };

  const shape3 = {
    right: "88px",
    top: "230px",
    position: "absolute",
  };

  const shape6 = {
    right: "272px",
    bottom: "0px",
    position: "absolute",
  };

  const btnStyle = {
    backgroundColor: "#F7B733",
    border: 0,
    marginTop: 10,
  };

  return (
    <div
      style={{ backgroundColor: "#4ABDAC", minHeight: "100vh", height: "auto" }}
    >
      <Container style={wrapper}>
        <img src={sh1} alt="fig1" style={shape1} className="shape" />
        <img src={sh2} alt="fig2" style={shape2} className="shape" />
        <img src={sh3} alt="fig3" style={shape3} className="shape" />
        <img src={sh6} alt="fig6" style={shape6} className="shape" />
        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center", padding: "30px" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#FC4A1A" }}><b>Code Websites From Any Where</b></h2>
            <h5
              style={{
                textAlign: "justify",
                color: "#FCFCFC",
                paddingTop: "10px",
              }}
            >
              With this online code editor, you can edit HTML, CSS and
              JavaScript code, and live preview of site instantly.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Web Editor
            </Button>

            <h2 style={{ color: "#FC4A1A", paddingTop: "70px" }}>
              <b>Generate README in Seconds</b>
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "#FCFCFC",
                paddingTop: "10px",
              }}
            >
              Online markdown editor, with custom toolbar to help you make your
              readme easily.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/markdown">
              Markdown Editor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
