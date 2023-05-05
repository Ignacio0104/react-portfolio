import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/navbar/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="icons-container">
        <i className="gradient-icon" onClick={() => navigate("/")}>
          <HomeIcon />
        </i>
        <i onClick={() => navigate("/about")}>
          <PersonIcon />
        </i>
        <i onClick={() => navigate("/portfolio")}>
          <CodeIcon />
        </i>
        <i onClick={() => navigate("/workExperience")}>
          <WorkIcon />
        </i>
        <i onClick={() => navigate("/contact")}>
          <PhoneIcon />
        </i>
      </div>
    </div>
  );
};

export default Navbar;
