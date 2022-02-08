import React, { Component } from "react";
import { useSelector } from "react-redux";

/**
 * @author
 * @function About
 **/

const About = (props) => {
  const studio = useSelector((state) => state.studioInfo.studio);

  return (
    <section className="about">
      <div className="container">
        <h3 className="section-title">A propos de nous</h3>
        <p style={{ opacity: 0.7 }}>{studio.studio.history}</p>
      </div>
    </section>
  );
};

export default About;
