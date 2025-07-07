import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
          data-bs-theme={`${props.mode}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    aria-disabled="true"
                    href="/"
                  >
                    Disabled
                  </a>
                </li>
              </ul> */}
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form> */}
              <div className="d-flex">
                <div
                  className="bg-primary rounded mx-2"
                  onClick={() => {
                    props.toggleMode("primary");
                  }}
                  style={{
                    height: "30px",
                    width: "30px",
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  className="bg-success rounded mx-2"
                  onClick={() => {
                    props.toggleMode("success");
                  }}
                  style={{
                    height: "30px",
                    width: "30px",
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  className="bg-danger rounded mx-2"
                  onClick={() => {
                    props.toggleMode("danger");
                  }}
                  style={{
                    height: "30px",
                    width: "30px",
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  className="bg-warning rounded mx-2"
                  onClick={() => {
                    props.toggleMode("warning");
                  }}
                  style={{
                    height: "30px",
                    width: "30px",
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  onClick={() => {
                    props.toggleMode(null);
                  }}
                  type="checkbox"
                  role="switch"
                  id="switchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="switchCheckDefault"
                >
                  Toggle Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string, AboutText: PropTypes.string };
