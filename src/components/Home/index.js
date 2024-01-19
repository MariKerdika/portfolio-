import LogoS from "../../assets/images/7.png";
import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm
            <img src={LogoS} alt="logo" />
            arina
            <br />
            React Developer
          </h1>
          <h2>Frontend Developer / React Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
