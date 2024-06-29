import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import Index from "views/Index.jsx";
import Events from "./components/book/event.jsx";
import EventReport from "views/sections/EventReport.jsx";
import Report from "views/sections/annualReport.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/event/eventreport" element={<EventReport/>}/>
      <Route path="/event" element={<Events/>} />
      <Route path="/annualreport" element={<Report/>}/>
      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
