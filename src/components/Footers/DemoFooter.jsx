import React from "react";
import "./footer-css.css";
import logo from "../../assets/img/logo.png";
import "react-router-dom";
import bgimg from "../../assets/img/cartographer.png";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  const HandleClick = () => {
    const phoneNumber = "022 6887 8700";

    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = phoneNumber;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px"; // Move it off-screen
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Alert the copied text
    alert("Copied the text: " + phoneNumber);
  };

  return (
    <footer
      class="footer-distributed"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "",
        backgroundColor: "black ",
        color: "#F8FAE5",
      }}
    >
      <div class="footer-left">
        <div style={{ display: "flex", flexFlow: "row", alignItems: "center" }}>
          <img
            style={{ height: "100px", width: "100px", zIndex: "999" }}
            src={logo}
            alt="..."
          />
          <h3
            style={{
              paddingLeft: "30px",
              fontFamily: "serif",
              color: "#F8FAE5",
            }}
          >
            LITSOC <span style={{ fontFamily: "serif" }}>DBIT</span>
          </h3>
        </div>

        <p class="footer-links" style={{ color: "#F8FAE5" }}>
          <a className="navlinks link-1" href="/index">
            Home
          </a>

          <a className="navlinks" href="/annualreport">
            Reports
          </a>

          <a className="navlinks" href="/event">
            Events
          </a>

          <a className="navlinks" href="https://www.instagram.com/dbit_litsoc/"  target="_blank"  rel="noreferrer" >
            Blog
          </a>

          <a className="navlinks" href="mailto:litsoc.dbitmumbai@gmail.com">
            Contact
          </a>
        </p>

        <p class="footer-company-name">LitSoc © 2024</p>
      </div>

      <div class="footer-center" style={{ color: "#F8FAE5" }}>
        <Container>
          <Row>
            <div>
              <a
                href="https://www.google.com/maps/place/Don+Bosco+Institute+of+Technology,+Mumbai/@19.0812583,72.8860212,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c8866a456c9f:0x8d1745d15baac575!8m2!3d19.0812532!4d72.8885961!16zL20vMGJjaDM1?entry=ttu"
                target="_blank"
                rel="noreferrer" 
              >
                <i class="fa fa-map-marker"></i>
                <p style={{ color: "#F8FAE5" }}>
                  <span>
                    Premier Automobiles Road Opp. HDIL Premier Exotica,
                  </span>{" "}
                  Kurla, Mumbai, Maharashtra 400070
                </p>
              </a>
            </div>
          </Row>
          <Row>
            <div>
              <a onClick={HandleClick} href="...">
                <i class="fa fa-phone"></i>
                <p style={{ color: "#F8FAE5" }}>022 6887 8700</p>
              </a>
            </div>
          </Row>
          <Row>
            <div>
              <p>
                <a
                  style={{ color: "#F8FAE5" }} id="mail"
                  href="mailto:litsoc.dbitmumbai@gmail.com"
                >
                  <i class="fa fa-envelope"></i>litsoc.dbitmumbai@gmail.com
                </a>
              </p>
            </div>
          </Row>
        </Container>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span style={{color: "#F8FAE5"}}>About Litsoc</span>
          The literary club empowers students in speaking, writing, and
          communication through competitive debates, establishing a prestigious
          role within the institution.
        </p>

        <div class="footer-icons">
          {/* <a href="#">
            <i class="fa fa-facebook footicon"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter footicon"></i>
          </a> */}
          <a href="https://www.instagram.com/dbit_litsoc/" target="_blank"  rel="noreferrer" >
            <i class="fa fa-instagram"></i>
          </a>
          {/* <a href="#">
            <i class="fa fa-github footicon"></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default DemoFooter;
