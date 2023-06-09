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
          Hi! My name is Ignacio, and I'm starting my professional IT path. I'm
          a self-motivated person who is eager to learn as much as possible
          about this exciting and constantly growing area. I like stepping out
          of my comfort zone in order to take up new challenges. I think of
          myself as a quick learner and a good team member. During all my
          different work experiences, I was able to prove to be a reliable,
          organized, and creative worker who is always willing to help their
          partners and go the extra mile to accomplish the team goals. I thank
          you for your time, and I hope that we can work together soon.
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
