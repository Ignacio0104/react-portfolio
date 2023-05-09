import { Link } from "react-router-dom";
import "../../styles/project/Project.css";

interface IProject {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  role: string;
  link: string;
  picture: string;
}

interface IProjectProps {
  projectInfo: IProject;
}

const Project = ({ projectInfo }: IProjectProps) => {
  return (
    <div className="project-container">
      <Link to={projectInfo.link} target="_blank">
        <img src={projectInfo.picture} alt={projectInfo.title}></img>
      </Link>
      <div className="project-text-container">
        <h3>{projectInfo.title}</h3>
        <p className="project-description">{projectInfo.description}</p>
        <div className="project-details-container">
          <p>
            <span>Created - </span>
            {projectInfo.date}
          </p>
          <p>
            <span>Technologies used - </span>
            {projectInfo.technologies.map((tec, index) => {
              return index === projectInfo.technologies.length - 1
                ? `& ${tec}`
                : `${tec}, `;
            })}
          </p>
          <p>
            <span>Role - </span>
            {projectInfo.role}
          </p>
          <p>
            <span>View Online - </span>
            <Link to={projectInfo.link} target="_blank">
              Link
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
