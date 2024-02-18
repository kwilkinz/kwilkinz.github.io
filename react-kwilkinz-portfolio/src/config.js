// config.js
import image1 from "./images/maroonDress2.jpg";
import image2 from "./images/decoder.png";
import image3 from "./images/flashcard.png";
import image4 from "./images/Framed_shot.png";
import image5 from "./images/grubdash_X1.png";
import image6 from "./images/TechyTips.png";
import image7 from "./images/TodoList.png";
import image8 from "./images/library.png";
import resume from "./images/2024_Frontend_Developer-keri-wilkins-resume.docx.pdf";

const config_intro = {
  title: "Hey, I'm",
  name: "Keri!",
  introText: (
    <>
      I'm a Software Engineer focusing currently on Front-End Development for
      Motiv, Inc.
      <br />
      <br />I strive to design meaningful and accessible websites that everyone
      can enjoy.
    </>
  ),
};

const config_project = {
  title: "Projects",
  githubText: "Github Code",
  introText: "A collection of my recent work:",
  githubProject1: "Techy Tips Blog",
  githubProject2: "Local Library Application",
  githubProject3: "Decoder/Encode Application",
  githubProject4: "Flashcard Application",
};

const config_art = {
  title: "About me",
  introText: (
    <>
      As a Criminology major, I discovered my passion for coding after
      graduation. I dedicated my post-graduate period to learning the
      intricacies of web development. Since then, I've developed a deep
      appreciation for the artistry in every design. Coding empowers me to craft
      experiences that bring a genuine smile with intuitive designs. As an
      enthusiastic explorer and perpetual student, I'm eagerly seeking
      opportunities to continue my growth journey.
    </>
  ),
};

const images = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  resume,
};

export { config_intro, config_project, config_art, images };
