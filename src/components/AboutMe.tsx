import "../styles/about/AboutMe.css";
import ReactIcon from "../assets/icons/react-icon.png";
import CSharpIcon from "../assets/icons/CSharp.png";
import CssIcon from "../assets/icons/css.png";
import FirebaseIcon from "../assets/icons/firebase.png";
import GithubIcon from "../assets/icons/github.png";
import GraphQlIcon from "../assets/icons/graphQl.png";
import HtmlIcon from "../assets/icons/html.png";
import JavaIcon from "../assets/icons/java.png";
import JavaScriptIcon from "../assets/icons/javascript.png";
import JestIcon from "../assets/icons/jest.png";
import PhpIcon from "../assets/icons/php.png";
import SassIcon from "../assets/icons/sass.png";
import SqlIcon from "../assets/icons/sql.png";
import TypeScriptIcon from "../assets/icons/typescript.png";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="description-container">
        <h2>About Me</h2>
        <p className="description-text">
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
        <div className="skills-container">
          <div className="skill-item">
            <p>React</p>
            <img src={ReactIcon} alt="react" />
          </div>
          <div className="skill-item">
            <p>Css</p>
            <img src={CssIcon} alt="css" />
          </div>
          <div className="skill-item">
            <p>HTML</p>
            <img src={HtmlIcon} alt="HTML" />
          </div>
          <div className="skill-item">
            <p>JavaScript</p>
            <img src={JavaScriptIcon} alt="JavaScript" />
          </div>
          <div className="skill-item">
            <p>Sass</p>
            <img src={SassIcon} alt="sass" />
          </div>
          <div className="skill-item">
            <p>GitHub</p>
            <img src={GithubIcon} alt="github" />
          </div>
          <div className="skill-item">
            <p>GraphQl</p>
            <img src={GraphQlIcon} alt="GraphQl" />
          </div>
          <div className="skill-item">
            <p>Jest</p>
            <img src={JestIcon} alt="Jest" />
          </div>
          <div className="skill-item">
            <p>PHP</p>
            <img src={PhpIcon} alt="PHP" />
          </div>
          <div className="skill-item">
            <p>TypeScript</p>
            <img src={TypeScriptIcon} alt="TypeScript" />
          </div>
          <div className="skill-item">
            <p>C#.NET</p>
            <img src={CSharpIcon} alt="C#.NET" />
          </div>
          <div className="skill-item">
            <p>SQL</p>
            <img src={SqlIcon} alt="SQL" />
          </div>
          <div className="skill-item">
            <p>Firebase</p>
            <img src={FirebaseIcon} alt="Firebase" />
          </div>
          <div className="skill-item">
            <p>Java</p>
            <img src={JavaIcon} alt="Java" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
