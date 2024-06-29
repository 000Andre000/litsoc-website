/*eslint-disable*/
import React from "react";
import VedioBg from "../../assets/video/bg1.mp4";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{ width: "100%", height: "100vh" }}
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={VedioBg}
          autoPlay
          loop
          muted
        />

        <div className="filter" />
        <div
          className="content-center"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <Container>
            <div className="Quote">
              <h2 style={{ color: "#FFFF" }}>Hello,</h2>
              <h1
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  color: "#D4B186",
                }}
              >
                Welcome to Litsoc
              </h1>
            </div>
            <h2 className="presentation-subtitle text-center"></h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
