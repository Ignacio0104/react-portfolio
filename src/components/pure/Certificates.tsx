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
import "../../styles/certificatesComponent/Certificates.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

const certificatesList = [
  {
    title: "React JS Advanced",
    hours: 30,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/7b8ffe0b-f850-405b-a2a9-2ed2ba25f826",
    picture: ReactAdv,
    skills: ["Custom Hooks", "PWA", "Testing", "TypeScript"],
    company: "OpenBootcamp",
  },
  {
    title: "React JS Intermediate",
    hours: 30,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/d99c79cd-25c2-4888-89b0-6fa3de3cc426",
    picture: ReactInt,
    skills: ["Hooks", "Events", "Routing", "HTTP Requests", "Async"],
    company: "OpenBootcamp",
  },
  {
    title: "JavaScript Basic",
    hours: 15,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/8ce5a151-111d-4a99-af2f-0619f9109402",
    picture: JavaScriptBasic,
    skills: ["Variables", "POO", "Loops"],
    company: "OpenBootcamp",
  },
  {
    title: "Git Intermediate",
    hours: 16,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/80007d33-6523-490e-9f1d-ccad53e04bcf",
    picture: GitInt,
    skills: ["Local Repositories", "Merge/Conflicts", "Gitflow", "CI/CD"],
    company: "OpenBootcamp",
  },
  {
    title: "HTML & CSS Intermediate",
    hours: 17,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/b4f05fd8-348f-46c6-b75f-beac0d37c66a",
    picture: HTML,
    skills: ["Selectors", "Bootstrap", "Grid", "Labels"],
    company: "OpenBootcamp",
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
    title: "React Query / TanStack Query: React Server State Management",
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
];

interface ICertificateProps {
  toogleCertificate: (bool: boolean) => void;
}
const Certificates = ({ toogleCertificate }: ICertificateProps) => {
  return (
    <div className="main-certificates-container">
      <CancelIcon
        fontSize="large"
        className="cancel-btn"
        onClick={() => toogleCertificate(false)}
      />
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
                <p key={skill}>
                  {skill}
                  {index < certificate.skills.length - 1 && "-"}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
