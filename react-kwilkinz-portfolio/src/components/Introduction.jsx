import React from 'react';
import '../App.css';
import '../Project_Filter';
import { config_intro, images } from '../config';

const Introduction = () => (
    <section className="intro" id="home">
      <div className="container">
        <div className="two-col-grid">
          <div className="inside-container-text">
            <h1 className="h1-intro-title">
              {config_intro.title} <strong id="name">{config_intro.name}</strong>
            </h1>
            <h4 className="h4-intro-text">
              {config_intro.introText}
            </h4>
          </div>
  
          <div className="inside-container-image">
            <img src={images.image1} alt="maroon dress" className="image" />
          </div>
        </div>
      </div>
    </section>
  );

export default Introduction;