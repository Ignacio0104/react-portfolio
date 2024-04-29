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
            <img src={ProfilePic} className="profile-pic" alt="profile"></img>
          </div>
          <div className="description-container">
            <p className="description-text">Hello, I'm </p>
            <h3 className="description-title">Ignacio Smirlian</h3>
            <p className="description-text">
              A passionate <span>Developer </span>dedicated to creating
              interactive web experiences, skilled in <span>Angular</span>,
              <span> React </span>,<span> TypeScript </span>, and
              <span> Flutter </span>, among other technologies.
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
              <button
                className="btn-linkedin"
                onClick={() =>
                  window.open("http://www.linkedin.com/in/ignacio-smirlian")
                }
              >
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
