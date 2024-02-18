import React from "react";
import "../App.css";
import "../Project_Filter";
import { config_art, images } from "../config";

const About = () => (
  <section className="about-me" id="about">
    <div className="container small-width">
      <div className="container-3 w-container">
        {/* before and after here */}
      </div>
      <div className="two-col-grid">
        <div className="small-container">
          <h2 className="h2-about-title">{config_art.title}</h2>
          <div className="about-me__body">
            <p className="about-text">{config_art.introText}</p>
          </div>
        </div>
        <div className="small-container center-align">
          <div className="about-image-circle">
            <img
              src={images.image4}
              alt="Keri leaning against a wall"
              className="image-about"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
