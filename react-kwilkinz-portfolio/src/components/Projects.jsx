import React from "react";
import "../App.css";
import "../Project_Filter";
import { config_project, images } from "../config";

const Project = () => (
  <section id="project">
    <div className="project-heading">
      <h3>{config_project.title}</h3>
      <p>{config_project.introText}</p>
      <ul className="project-filter">
        <li className="list project-filter-active" data-filter="all">
          All
        </li>
        <li className="list" data-filter="front">
          Front-End
        </li>
        <li className="list" data-filter="back">
          Back-End
        </li>
      </ul>
    </div>

    {/* Project Box 1 - Techy Tips Blog */}
    <div className="project-container">
      <a
        href="https://github.com/kwilkinz/TechyTips_blog"
        target="_blank"
        rel="noopener noreferrer"
        className="img__wrap project-box front back"
      >
        <img
          src={images.image6}
          alt="Techy Tips Blog"
          className="portfolio__img"
        />
        <div className="overlay">
          <h4 className="text">{config_project.githubProject1}</h4>
          <div className="secondary-small-button">
            <div>{config_project.githubText}</div>
          </div>
        </div>
      </a>

      {/* Project Box 2 - Local Library Application */}
      <a
        href="https://github.com/kwilkinz/Local-Library"
        target="_blank"
        rel="noopener noreferrer"
        className="img__wrap project-box back"
      >
        <img
          src={images.image8}
          alt="Local Library Application"
          className="portfolio__img"
        />
        <div className="overlay">
          <h4 className="text">{config_project.githubProject2}</h4>
          <div className="secondary-small-button">
            <div>{config_project.githubText}</div>
          </div>
        </div>
      </a>

      {/* Project Box 3 - Decoder/Encode Application */}
      <a
        href="https://github.com/kwilkinz/decoderRing"
        target="_blank"
        rel="noopener noreferrer"
        className="img__wrap project-box back"
      >
        <img
          src={images.image2}
          alt="Decoder/Encode Application"
          className="portfolio__img"
        />
        <div className="overlay">
          <h4 className="text">{config_project.githubProject3}</h4>
          <div className="secondary-small-button">
            <div>{config_project.githubText}</div>
          </div>
        </div>
      </a>

      {/* <!----Box4-----(about-front)--> */}
      <a
        href="https://github.com/kwilkinz/Flashcard_App"
        target="_blank"
        rel="noopener noreferrer"
        class="img__wrap project-box front"
      >
        <img src={images.image3} alt="flashcard" class="portfolio__img" />
        <div class="overlay">
          <h4 class="text">{config_project.githubProject4}</h4>
          <div class="secondary-small-button">
            <div>{config_project.githubText}</div>
          </div>
        </div>
      </a>
    </div>
  </section>
);

export default Project;
