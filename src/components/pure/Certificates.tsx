import "../../styles/certificatesComponent/Certificates.css";
import ReactAdv from "../../assets/images/react-adv-certificate.png";
import ReactInt from "../../assets/images/react-int-certificate.png";
import JavaScriptBasic from "../../assets/images/javascript-basic.png";
import GitInt from "../../assets/images/git-int-certificate.png";
import HTML from "../../assets/images/HTMLCSS-basic-certificate.png";
import Scrum from "../../assets/images/badge-SFC.png";
import ReactQuery from "../../assets/images/react-query-certificate.png";
import ReactHooks from "../../assets/images/react-hooks-certificate.png";
import RTL from "../../assets/images/RTL-certificate.png";
import Games from "../../assets/images/games-js-certificate.png";
import Udemy from "../../assets/images/udemy-logo.jpg";
import OpenBootCamp from "../../assets/images/OpenBootcamp-logo.jpg";
import RestApi from "../../assets/images/rest-api-couse.jpg";
import MasterHooks from "../../assets/images/react-hooks-master.jpg";
import NET5Icon from "../../assets/images/NET5API.jpg";
import NET6Icon from "../../assets/images/NETAPI7.jpg";
import AngularCourse from "../../assets/images/angular-course.jpg";
import RTLJest from "../../assets/images/rtljest.jpg";
import AngularComplete from "../../assets/images/angular-complete.jpg";
import "../../styles/certificatesComponent/Certificates.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

const certificatesList = [
  {
    title: "Angular - The Complete Guide",
    hours: 37,
    link: "https://www.udemy.com/certificate/UC-77dc4770-9277-42aa-b39d-db861461db3f/",
    picture: AngularComplete,
    skills: [
      "Directives",
      "Dep. Injection",
      "Services",
      "NgRx",
      "HTTP",
      "Routing",
    ],
    company: "Udemy",
  },
  {
    title: ".NET 5 Web API & Entity Framework",
    hours: 3,
    link: "https://www.udemy.com/certificate/UC-d4eebf6b-801e-4481-8f0e-c67d8dae81de/",
    picture: NET5Icon,
    skills: ["C#", ".NET", "Entity Framework", "SQL", "HTTP"],
    company: "Udemy",
  },
  {
    title: "Master React Hooks Development",
    hours: 6,
    link: "https://udemy.com/certificate/UC-39e77c72-b6aa-42ce-b7af-bc843e4a85bd/",
    picture: MasterHooks,
    skills: ["Hooks", "Redux", "Reducers"],
    company: "Udemy",
  },
  {
    title: "React Query",
    hours: 8,
    link: "https://www.udemy.com/certificate/UC-0cdd24dd-e10d-487e-b49e-17692076ade0/",
    picture: ReactQuery,
    skills: [
      "Queries",
      "Mutation",
      "Pre-Fetching",
      "Authentication",
      "Testing",
    ],
    company: "Udemy",
  },
  {
    title: "React Testing Library and Jest",
    hours: 7.5,
    link: "https://www.udemy.com/certificate/UC-a029f12b-c221-4ca6-844e-78c647d9b757/",
    picture: RTLJest,
    skills: ["Mock", "Query", "Matchers", "Handlers", "SWR", "Testing"],
    company: "Udemy",
  },
  {
    title: "Angular Core Deep Dive",
    hours: 9,
    link: "https://www.udemy.com/certificate/UC-b4053e2a-a22a-4391-b9d5-a5ba4135c69f/",
    picture: AngularCourse,
    skills: [
      "Components",
      "Content projection",
      "Dependency Injection",
      "Lifecycle Methods",
    ],
    company: "Udemy",
  },
  {
    title: "Rest Api's with ASP.NET & C#",
    hours: 4.5,
    link: "https://www.udemy.com/certificate/UC-78832f92-0021-4e57-9600-98bf472f79e1/",
    picture: RestApi,
    skills: ["Rest Api's", "C#", "Azure", ".NET"],
    company: "Udemy",
  },

  {
    title: ".NET 7 Web API & Entity Framework Jumpstart",
    hours: 22,
    link: "https://www.udemy.com/certificate/UC-39ca2d56-8850-482e-abe3-3b3c09fee0f2/",
    picture: NET6Icon,
    skills: [
      ".NET(7,6,5)",
      "Entity Framework",
      "Mvc",
      "API",
      "JWT",
      "Authentication",
    ],
    company: "Udemy",
  },
  {
    title: "Scrum Fundamentals Certified",
    hours: 1,
    link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=909115",
    picture: Scrum,
    skills: ["Scrum Methodology"],
    company: "SCRUMstudy",
  },

  {
    title: "Complete React Hooks Course",
    hours: 8,
    link: "https://www.udemy.com/certificate/UC-d42fd5d0-48ff-4a4a-8472-99fa5753ea1a/",
    picture: ReactHooks,
    skills: ["Components Lifecycle", "React Router", "Redux", "Hooks Testing"],
    company: "Udemy",
  },
  {
    title: "Testing React with Jest and React Testing Library (RTL)",
    hours: 8,
    link: "https://www.udemy.com/certificate/UC-148d4b8a-f75d-4475-9ffd-24cef5848f26/",
    picture: RTL,
    skills: ["TDD", "Jest-DOM", "Unit testing", "Mock Service Worker"],
    company: "Udemy",
  },
  {
    title: "Super Pack JavaScript, Canvas and Videogames JS",
    hours: 25,
    link: "https://www.udemy.com/certificate/UC-fd7fa42d-e67e-4db1-bfcf-947585db7716/",
    picture: Games,
    skills: ["Canvas", "Functions", "Loops", "DOM"],
    company: "Udemy",
  },
  {
    title: "HTML & CSS Intermediate (Offline)",
    hours: 17,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/b4f05fd8-348f-46c6-b75f-beac0d37c66a",
    picture: HTML,
    skills: ["Selectors", "Bootstrap", "Grid", "Labels"],
    company: "OpenBootcamp",
  },
  {
    title: "React JS Advanced (Offline)",
    hours: 30,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/7b8ffe0b-f850-405b-a2a9-2ed2ba25f826",
    picture: ReactAdv,
    skills: ["Custom Hooks", "PWA", "Testing", "TypeScript"],
    company: "OpenBootcamp",
  },
  {
    title: "React JS Intermediate (Offline)",
    hours: 30,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/d99c79cd-25c2-4888-89b0-6fa3de3cc426",
    picture: ReactInt,
    skills: ["Hooks", "Events", "Routing", "HTTP Requests", "Async"],
    company: "OpenBootcamp",
  },
  {
    title: "JavaScript Basic (Offline)",
    hours: 15,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/8ce5a151-111d-4a99-af2f-0619f9109402",
    picture: JavaScriptBasic,
    skills: ["Variables", "POO", "Loops"],
    company: "OpenBootcamp",
  },
  {
    title: "Git Intermediate (Offline)",
    hours: 16,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/80007d33-6523-490e-9f1d-ccad53e04bcf",
    picture: GitInt,
    skills: ["Local Repositories", "Merge/Conflicts", "Gitflow", "CI/CD"],
    company: "OpenBootcamp",
  },
];

interface ICertificateProps {
  toogleCertificate: (bool: boolean) => void;
}
const Certificates = ({ toogleCertificate }: ICertificateProps) => {
  return (
    <>
      <CancelIcon
        fontSize="large"
        className="cancel-btn"
        onClick={() => toogleCertificate(false)}
      />
      <div className="main-certificates-container">
        {certificatesList.map((certificate) => (
          <div key={certificate.title} className="certificate-container">
            <img
              className="certificate-pic"
              src={certificate.picture}
              alt={certificate.title}
            ></img>
            <div className="certificate-information">
              <Link to={certificate.link} target="_blank">
                <h2>{certificate.title}</h2>
              </Link>
              <p> {certificate.hours} hours</p>
              <div className="certificate-company-container">
                <Link
                  target="_blank"
                  to={
                    certificate.company === "Udemy"
                      ? "https://www.udemy.com/"
                      : "https://open-bootcamp.com/"
                  }
                >
                  <p> {certificate.company}</p>
                  <img
                    src={certificate.company === "Udemy" ? Udemy : OpenBootCamp}
                    alt="company"
                  ></img>
                </Link>
              </div>
              <div className="certificate-skills-container">
                {certificate.skills.map((skill, index) => (
                  <p className="skill-items-list" key={skill}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificates;
