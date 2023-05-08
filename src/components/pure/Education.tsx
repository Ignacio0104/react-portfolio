import { Link } from "react-router-dom";
import "../../styles/education/Education.css";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const certificationsURLs = {
  ReactJSAdvanced:
    "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/7b8ffe0b-f850-405b-a2a9-2ed2ba25f826",
  ReactQuery:
    "https://udemy.com/certificate/UC-0cdd24dd-e10d-487e-b49e-17692076ade0/",
  ReactHooks:
    "https://www.udemy.com/certificate/UC-d42fd5d0-48ff-4a4a-8472-99fa5753ea1a/",
  Testing:
    "https://www.udemy.com/certificate/UC-148d4b8a-f75d-4475-9ffd-24cef5848f26/",
  GamesJs:
    "https://www.udemy.com/certificate/UC-fd7fa42d-e67e-4db1-bfcf-947585db7716/",
  Git: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/80007d33-6523-490e-9f1d-ccad53e04bcf",
  HTMLCSS:
    "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/b4f05fd8-348f-46c6-b75f-beac0d37c66a",
  JavaScript:
    "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/8ce5a151-111d-4a99-af2f-0619f9109402",
  ReactInter:
    "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/d99c79cd-25c2-4888-89b0-6fa3de3cc426",
  SCRUM:
    "https://www.scrumstudy.com/certification/verify?type=SFC&number=909115",
};

interface IEducationProps {
  toogleCertificate: (bool: boolean) => void;
}

const Education = ({ toogleCertificate }: IEducationProps) => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="list-container">
        <div className="list-item-uni">
          <h5>Technician In Programming | UTN</h5>
          <p>2021 - present</p>
        </div>
        <div className="list-item">
          <h5>Courses and certifications</h5>
          <div className="certificates-container">
            <Link
              className="certificates-links"
              to={certificationsURLs.ReactJSAdvanced}
              target="_blank"
            >
              React JS
              <WorkspacePremiumIcon />
            </Link>
            <Link
              className="certificates-links"
              to={certificationsURLs.Testing}
              target="_blank"
            >
              RTL and Jest
              <WorkspacePremiumIcon />
            </Link>
            <Link
              className="certificates-links"
              to={certificationsURLs.ReactQuery}
              target="_blank"
            >
              React Query
              <WorkspacePremiumIcon />
            </Link>
          </div>
        </div>
      </div>
      <button className="more-btn" onClick={() => toogleCertificate(true)}>
        View more...
      </button>
    </div>
  );
};

export default Education;
