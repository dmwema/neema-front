import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  const studio = useSelector((state) => state.studioInfo.studio);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Liens utils</span>
              </li>
              <li className="nav-item">
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ingénieurs">Ingénieurs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/studio">Studio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services">Services</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Notre studio</span>
              </li>
              <li className="nav-item">
                <NavLink to="/apropos">A propos de nous</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact">Nous contacter</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Contact & Support</span>
              </li>
              {studio.studio != undefined
                ? studio.studio.phones.map((phone) => {
                    return (
                      <li className="nav-item" key={phone.id}>
                        <span className="nav-link">
                          <i className="fas fa-phone"></i>
                          {phone.number}
                        </span>
                      </li>
                    );
                  })
                : ""}

              <li className="nav-item">
                <a className="nav-link" href="/chat">
                  <i className="fas fa-comments"></i>Live chat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  <i className="fas fa-envelope"></i>Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/messag">
                  <i className="fas fa-star"></i>Give feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <i className="fas fa-ellipsis-h"></i>
        </div>

        <div className="row text-center">
          <div className="col-md-4 box">
            <span className="copyright quick-links">
              Copyright &copy; Neema Majabu{" "}
              <script>document.write(new Date().getFullYear())</script>
            </span>
          </div>
          <div className="col-md-4 box">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="/twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
