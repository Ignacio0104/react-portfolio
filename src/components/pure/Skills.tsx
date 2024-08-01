import ReactIcon from "../../assets/icons/react-icon.png";
import CSharpIcon from "../../assets/icons/CSharp.png";
import CssIcon from "../../assets/icons/css.png";
import FirebaseIcon from "../../assets/icons/firebase.png";
import GithubIcon from "../../assets/icons/github.png";
import GraphQlIcon from "../../assets/icons/graphQl.png";
import JasmineIcon from "../../assets/icons/jasmine-logo.png";
import JavaIcon from "../../assets/icons/java.png";
import JavaScriptIcon from "../../assets/icons/javascript.png";
import JestIcon from "../../assets/icons/jest.png";
import PhpIcon from "../../assets/icons/php.png";
import SassIcon from "../../assets/icons/sass.png";
import FlutterIcon from "../../assets/icons/flutter.png"
import TypeScriptIcon from "../../assets/icons/typescript.png";
import AngularIcon from "../../assets/icons/angular.png";
import NgrxIcon from "../../assets/icons/ngrx.svg"
import "../../styles/skills/Skills.css";

const Skills = () => {
  return (
    <div className="skills-main-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <p>React</p>
          <img src={ReactIcon} alt="react" />
        </div>
        <div className="skill-item">
          <p>Angular</p>
          <img src={AngularIcon} alt="Angular" />
        </div>
        <div className="skill-item">
          <p>NgRx</p>
          <img src={NgrxIcon} alt="Ngrx" />
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
          <p>Jasmine</p>
          <img src={JasmineIcon} alt="Jasmine" />
        </div>
        <div className="skill-item">
          <p>TypeScript</p>
          <img src={TypeScriptIcon} alt="TypeScript" />
        </div>
        <div className="skill-item">
          <p>GitHub</p>
          <img src={GithubIcon} alt="github" />
        </div>
        <div className="skill-item">
          <p>Flutter</p>
          <img src={FlutterIcon} alt="SQL" />
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
          <p>C#.NET</p>
          <img src={CSharpIcon} alt="C#.NET" />
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
  );
};

export default Skills;
