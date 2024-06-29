/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import IndexHeader from "components/Headers/IndexHeader.jsx";
import CoreTeam from "./sections/CoreTeam";
import "../assets/css/style.css";
import EventSection from "views/sections/SectionCarousel.jsx";
import WhatWeDo from "../views/sections/whatWeDoSection";
import DemoFooter from "components/Footers/DemoFooter";


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <div className="bd">
        <div className="filter" />
        <IndexNavbar scrolly={550} /> {/* Pass scrolly as a prop */}
        <IndexHeader />
        <div className="main">
          <EventSection />
          <WhatWeDo />
          <CoreTeam />
        </div>
        <DemoFooter/>
      </div>
    </>
  );
}

export default Index;
