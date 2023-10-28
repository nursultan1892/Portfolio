import React from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import ProfileLogo from "../images/ProfileLogo.png";

function Header() {
  return (
    <Nav className="heads">
      <div>
        <Link to="/">
          <img src={ProfileLogo} alt="profile-logo" width="150" />
        </Link>
      </div>
      <div className="navs">
        <Link to="/" className="nav-link">
          <span>Home</span>
        </Link>
        <Link to="/aboutme" className="nav-link">
          <span>About Me</span>
        </Link>
        <Link to="/projects" className="nav-link">
          <span>Projects</span>
        </Link>
        <Link to="/contacts" className="nav-link">
          <span>Contacts</span>
        </Link>
      </div>
    </Nav>
  );
}
export default Header;
