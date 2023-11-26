import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/7.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <h2 className="name">MARINA</h2>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/profile.php?id=100069718897965"
      >
        <FaFacebookSquare />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/MariKerdika">
        <FaGithubSquare />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/marina-kerdikashvili-35a815228/"
      >
        <FaLinkedin />
      </a>
    </ul>
  </div>
);

export default Sidebar;
