import ProfilePic from "../assets/images/profile-pic-small.jpg";
import "../styles/homeComponent/Home.css";
import CvFile from "../assets/documents/IgnacioSmirlian-CV2023.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="information-container">
          <div className="image-container">
            <img src={ProfilePic} alt="profile"></img>
          </div>
          <div className="description-container">
            <p>Hello, I'm </p>
            <h3>Ignacio Smirlian</h3>
            <p>
              A passionate <span>Frontend developer </span>dedicated to creating
              interactive web experiences, skilled in <span>HTML</span>,
              <span> CSS</span>,<span> JavaScript</span>, and
              <span> React</span>, among other technologies.
            </p>
            <div className="button-container">
              <div className="btn-cv-container">
                <a
                  className="btn-cv"
                  href={CvFile}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download cv
                </a>
              </div>
              <button className="btn-linkedin">
                LinkedIn <LinkedInIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
