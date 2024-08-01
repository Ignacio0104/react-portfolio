import { useState } from "react";
import "../styles/about/AboutMe.css";
import Education from "./pure/Education";
import Certificates from "./pure/Certificates";
import Skills from "./pure/Skills";

const AboutMe = () => {
  const [allCertificates, setAllCertificates] = useState(false);

  const toogleCertificates = (bool: boolean): void => {
    setAllCertificates(bool);
  };
  return (
    <div className="about-container">
      <div className="about-description-container">
        <h2>About Me</h2>
        <p className="about-description-text">
          Hi! My name is Ignacio, and I'm an experienced web developer currently working on a high-profile project at Globant. 
          My expertise lies in frontend development with Angular and React, and I am equally proficient in backend technologies like C# .NET and Node.js, 
          as well as mobile development with Flutter. 
          I pride myself on being a quick learner and a collaborative team player. 
          Throughout my career, I have consistently demonstrated reliability, organization, and creativity, always willing to support my colleagues and go the extra mile to achieve team goals.
        </p>
      </div>
      <div className="about-info-container">
        <Skills></Skills>
        <Education toogleCertificate={toogleCertificates}></Education>
        {allCertificates && (
          <Certificates toogleCertificate={toogleCertificates}></Certificates>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
