import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-top">
      <div className="container-fluid">
        <Link className="navbar-brand mx-1" to="/">
         <img src={require("./images/Hlogo.png")} alt='logo' width="50px"  />
          CITY HOSPITAL
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/appointment">
                Appointment
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex ">
            <a href="https://www.facebook.com/MDCityHealthCare/" target="_blank" class="fab fa-facebook mx-2"></a>
            <a href="https://twitter.com/nehealthcity?lang=en" target="_blank" class="fab fa-twitter mx-2"></a>
            <a href="https://www.instagram.com/city__hospital/" target="_blank" class="fab fa-instagram mx-2"></a>
            <a href="https://wa.me/+91-8850912764?text=I'm%20interested%20for%20appointment" target="_blank" class="fab fa-whatsapp mx-2"></a>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
