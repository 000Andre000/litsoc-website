// WhatWeDo.js

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import bgimg from "../../assets/img/cartographer.png";
import "./whatwedo.css"; // Import the CSS file

const WhatWeDo = () => {
  const [showtitle, setShowtitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const triggerPosition = 1700; // Adjust this value according to your needs
      setShowtitle(scrollPosition > triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about">
      <blockquote className="blockquote">
        <h1 className={`in-out ${showtitle ? "appear" : "hidden"}`}>What We Do</h1>
      </blockquote>
      <div className="infocus">
        <h2 className="title">Workshops</h2>
        <p className="h3">
        LitSoc regularly conducts workshops designed to enhance
                  students' communication and literary skills. Notable among
                  these are Just-A-Minute (JAM) sessions, which challenge
                  participants to speak on a given topic for one minute without
                  hesitation, repetition, or deviation. These sessions are
                  excellent for improving quick thinking and verbal fluency.
                  Effective Speaking workshops focus on teaching techniques for
                  clear and impactful communication, essential for both academic
                  and professional success. By participating in these workshops,
                  students can gain valuable skills that will serve them well in
                  various aspects of their lives, from classroom presentations
                  to job interviews.
        </p>
      </div>
      <div className="infocus">
        <h2 className="title">Blog</h2>
        <p className="h3">
        LitSoc maintains an Instagram blog that serves as a platform
                  for students to showcase their literary talents. The blog
                  features a variety of submissions, including poetry, short
                  stories, book reviews, and personal essays. This space not
                  only allows students to express their creativity but also
                  fosters a sense of community among like-minded individuals. By
                  providing this outlet, LitSoc helps nurture the literary
                  skills of students and gives them the opportunity to gain
                  visibility for their work in a supportive environment.
        </p>
      </div>
      <div className="infocus">
        <h2 className="title">Events</h2>
        <p className="h3">
        LitSoc is renowned for organizing a variety of engaging events
                  that appeal to students with diverse interests. Among these
                  are debate competitions, where participants can hone their
                  argumentative skills and engage in intellectual discourse on
                  various topics. Poetry recitations offer a platform for
                  budding poets to perform their work and receive feedback.
                  Elocution events help students develop their public speaking
                  abilities. Additionally, interactive games such as murder
                  mystery provide a fun and creative way to build teamwork and
                  problem-solving skills. These events not only entertain but
                  also enrich the participants' academic and personal growth.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
