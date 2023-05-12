import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
  const [menuResponsive, setMenuResponsive] = useState(false);

  const toogleMenuOption = (menu: string, bool: boolean) => {
    setMenuVisibility({ ...menuVisibility, [menu]: bool });
  };

  return (
    <>
      <div className="navbar-responsive-container">
        {menuResponsive ? (
          <CloseIcon onClick={() => setMenuResponsive(false)} />
        ) : (
          <MenuIcon onClick={() => setMenuResponsive(true)} />
        )}
      </div>
      <div className={`navbar-container ${menuResponsive ? "visible" : ""}`}>
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
              style={{
                visibility: menuVisibility.about ? "visible" : "hidden",
              }}
            >
              About
            </span>
          </i>
          <i
            onClick={() => navigate("/portfolio")}
            onMouseEnter={() => toogleMenuOption("portfolio", true)}
            onMouseLeave={() => toogleMenuOption("portfolio", false)}
          >
            <CodeIcon />
            <span
              style={{
                visibility: menuVisibility.portfolio ? "visible" : "hidden",
              }}
            >
              Portofolio
            </span>
          </i>
          <i
            onClick={() => navigate("/workExperience")}
            onMouseEnter={() => toogleMenuOption("workExperience", true)}
            onMouseLeave={() => toogleMenuOption("workExperience", false)}
          >
            <WorkIcon />
            <span
              style={{
                visibility: menuVisibility.workExperience
                  ? "visible"
                  : "hidden",
              }}
            >
              Work Experience
            </span>
          </i>
          <i
            onClick={() => navigate("/contact")}
            onMouseEnter={() => toogleMenuOption("contact", true)}
            onMouseLeave={() => toogleMenuOption("contact", false)}
          >
            <PhoneIcon />
            <span
              style={{
                visibility: menuVisibility.contact ? "visible" : "hidden",
              }}
            >
              Contact
            </span>
          </i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
