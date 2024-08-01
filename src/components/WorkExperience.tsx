import { useEffect, useState } from "react";
import "../styles/workExperience/workExperience.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const WorkExperience = () => {
  const [linkedinBtnEnd, setLinkedinBtnEnd] = useState(false);

  useEffect(() => {
    checkBtnLikedin();
  }, []);

  const checkBtnLikedin = () => {
    if (window.innerWidth <= 425) {
      setLinkedinBtnEnd(true);
    } else {
      setLinkedinBtnEnd(false);
    }
  };

  window.addEventListener("resize", checkBtnLikedin);

  return (
    <div className="work-exp-container">
      <div className="timeline">
        <div className="outer">
          <div className="card">
            <div className="info">
              <h3 className="title">
                Web UI Developer | Globant <span> (January 2023 - Present)</span>
              </h3>
              <ul>
                <li>
                Develop multiple interconnected web pages with complex workflows according to client expectations
                </li>
                <li>
                Implement and maintain reusable components for the company's internal library
                </li>
                <li>
                Integrate diverse backend resources
                </li>
                <li>
                Contribute to the design and architecture of future developments
                </li>
                <li>
                Demonstrate application progress to clients and stakeholders through bi-weekly meetings
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">
                Associate Professor | UTN <span> (July 2022 - March 2023)</span>
              </h3>
              <p>
                Associate professor responsible for teaching Object-oriented
                programming, C# .NET on Visual Studio, Unit Testing,
                Multithreaded programming, Events and Delegates, and SQL.
              </p>
            </div>
          </div>
          {!linkedinBtnEnd && (
            <button
              className="btn-linkedin"
              onClick={() =>
                window.open("http://www.linkedin.com/in/ignacio-smirlian")
              }
            >
              LinkedIn <LinkedInIcon />
            </button>
          )}
        </div>
      </div>
      <div className="timeline">
        <div className="outer">
          <div className="card">
            <div className="info">
              <h3 className="title">
                Oracle Functional | Globant
                <span> (April 2022 - January 2023)</span>
              </h3>
              <ul>
                <li>
                Analyze and resolve issues for JD Edwards users through an incident ticket system.
                </li>
                <li>
                Develop a deep understanding of the client's business and its processes.
                </li>
                <li>
                  Suggest and work on system improvements whenever possible
                </li>
                <li>
                Conduct monthly analysis and reporting on the flow, status, and backlog of all processed tickets.
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">
                Developer | Freelance / Contractor <span> (February 2022 - Present)</span>
              </h3>
              <ul>
                <li>
                Full-Stack Development: Perform both front-end and back-end development tasks to create dynamic, user-friendly web applications.
                </li>
                <li>
                Design and Architect Web Pages: Apply thoughtful design and architecture principles to ensure scalability, performance, and maintainability of web pages.
                </li>
                <li>
                Responsive and Accessible Design: Ensure every component of the web application is responsive and accessible across various devices and platforms.
                </li>
              </ul>
            </div>
          </div>
          {linkedinBtnEnd && (
            <button
              className="btn-linkedin"
              onClick={() =>
                window.open("http://www.linkedin.com/in/ignacio-smirlian")
              }
            >
              LinkedIn <LinkedInIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
