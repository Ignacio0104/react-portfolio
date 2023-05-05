import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/navbar/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuVisibility, setMenuVisibility] = useState({
    home: false,
    about: false,
    portfolio: false,
    workExperience: false,
    contact: false,
  });

  const toogleMenuOption = (menu: string, bool: boolean) => {
    setMenuVisibility({ ...menuVisibility, [menu]: bool });
  };

  return (
    <div className="navbar-container">
      <div className="icons-container">
        <i
          onClick={() => navigate("/")}
          onMouseEnter={() => toogleMenuOption("home", true)}
          onMouseLeave={() => toogleMenuOption("home", false)}
        >
          <HomeIcon />
          <span
            style={{ visibility: menuVisibility.home ? "visible" : "hidden" }}
          >
            Home
          </span>
        </i>
        <i
          onClick={() => navigate("/about")}
          onMouseEnter={() => toogleMenuOption("about", true)}
          onMouseLeave={() => toogleMenuOption("about", false)}
        >
          <PersonIcon />
          <span
            style={{ visibility: menuVisibility.about ? "visible" : "hidden" }}
          >
            About
          </span>
        </i>
        <i onClick={() => navigate("/portfolio")}>
          <CodeIcon />
          <span>Home</span>
        </i>
        <i onClick={() => navigate("/workExperience")}>
          <WorkIcon />
          <span>Home</span>
        </i>
        <i onClick={() => navigate("/contact")}>
          <PhoneIcon />
          <span>Home</span>
        </i>
      </div>
    </div>
  );
};

export default Navbar;
