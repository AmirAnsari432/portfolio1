import React from "react";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="navbar bg-black">
      <div className="container-fluid">
        <a className="navbar-brand text-white " href="#home">
          <i className="mx-2">
            <VscAccount />
          </i>
          Amir
        </a>
        <div className="d-flex p-2 ">
          <div className="mx-3 text-light">
            <a
              className="fw-500 text-light"
              href="https://github.com/AmirAnsari432"
            >
              GitHub
            </a>
          </div>
          <div className="mx-3">
            <a
              className="text-light"
              href="https://www.linkedin.com/in/amir-ansari-80711a237/"
            >
              LinkedIn
            </a>
          </div>
          <div className="mx-3">
            <a className="text-light" href="#contact">
              Contact
            </a>
          </div>

          <div className="mx-2">
            <button className="btn shadow-sm bg-body rounded">view Work</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
