import "./header.css";
import { useState } from "react";

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <a className="navbar-brand ms-2" href="#">
              ManiManjiri
            </a>
          </div>
          <div className={`search-container ${searchVisible ? "active" : ""}`}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <div className="search-icon" onClick={handleSearchClick}>
            <i className="fas fa-search"></i>
          </div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <a href="#"> <h5>Home</h5> </a>
              </li>
              <li className="nav-item me-5">
                <a href="#"> <h5>About</h5> </a>
              </li>
              <li className="nav-item me-5">
                <a href="#"> <h5>Contact</h5> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
