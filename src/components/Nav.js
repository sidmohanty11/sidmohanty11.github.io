import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header className="app_header">
        <h2>SM.</h2>
        <nav id="navbar" className="app_header__nav">
          <ul>
            <li>
              <Link to="/">About me</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/experiences">Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact-me">Contact me</Link>
            </li>
          </ul>
        </nav>
        <a
          href="https://drive.google.com/file/d/1EoFN--jq4xlQJ53tqIHTBhZa87qdNUUG/view"
          target="_blank"
          rel="noreferrer"
          className="app_resume_btn"
        >
          Resume
        </a>
      </header>
      <hr></hr>
    </>
  );
};

export default Nav;
