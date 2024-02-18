import React from "react";
import "./App.css";
import "./Project_Filter.jsx";
import Introduction from "./components/Introduction.jsx";
import Project from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Footer from './components/Footer.jsx';
import { images } from "./config";
import ProjectFilter from "./Project_Filter.jsx";

function App() {
  return (
    <div>
      <div id="wrapper">
      <header>
        <meta charSet="UTF-8" />
        <meta name="author" content="Keri Wilkins" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* Add your CSS imports here */}
        <script
          src="https://kit.fontawesome.com/feda39ad8c.js"
          crossOrigin="anonymous"
        ></script>
        <title>Keri Wilkins-Portfolio</title>
      </header>
      <div className="logo"></div>
      <button class="nav-toggle" aria-label="toggle navagation">
        <span class="hamburger"></span>
      </button>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#project" class="nav__link">
              Projects
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">
              About Me
            </a>
          </li>
          <li class="nav__item">
            <a href={images.resume} target="_blank" class="nav__link">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <Introduction />
      <Project />
      <ProjectFilter />
      <About />
      <Footer />
    </div>
    </div>
  );
}

export default App;
