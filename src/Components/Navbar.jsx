import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activindex, setActiveindex] = useState(0);
  const [showLangs, setShowLangs] = useState(false);
  const routes = [
    { id: 1, route: "/", name: "Home" },
    { id: 1, route: "/collection", name: "Collection" },
    { id: 1, route: "/about", name: "About" },
    { id: 1, route: "/contact", name: "Contact" },
  ];
  const activeLink = (id) => {
    setActiveindex(id);
  };
  const showLang = () => {
    if(window.innerWidth>768){
        setShowLangs(!showLangs);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const showMobileMenu = () => {
   
    setMenuOpen(!menuOpen);
  };
 
  const hideMenu = () => {
    if(window.innerWidth<768){
      
        setMenuOpen(!menuOpen);
    }
  };
  const changLanguage = () =>{
    hideMenu();
    showLang();
  }
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <nav className="navs">
          <div className="navbar-left">
            <div className="navbar-logo">
              {/* <img src="Images/fabric.png" alt="Logo is not" /> */}
              <img src="Images/logo.png" alt="" />
            </div>
            <ul className="navbar-links">
              {routes &&
                routes.map((route, index) => (
                  <li key={index}>
                    <Link
                      onClick={() => activeLink(index)}
                      className={`link ${activindex === index ? "active" : ""}`}
                      to={route.route}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="navbar-right">
            <div className="dropdown">
              <button onClick={showLang} className="dropdown-toogle">
                <span>Menu</span>

                <FontAwesomeIcon
                  className={`caret ${showLangs ? "caret-t" : ""}`}
                  icon={faCaretDown}
                  style={{ color: "#FFD43B" }}
                />
              </button>

              <ul className={`language ${showLangs ? "click" : ""}`}>
                <li onClick={changLanguage} className="language-item">
                  {" "}
                  <img src="Images/uzbekistan.png" alt="" /> <span>UZ</span>
                </li>
                <li onClick={changLanguage} className="language-item">
                  {" "}
                  <img src="Images/russia (2).png" alt="" /> <span>EN</span>
                </li>
                <li onClick={changLanguage} className="language-item">
                  {" "}
                  <img src="Images/united-kingdom (2).png" alt="" /> <span>RU</span>
                </li>
              
              </ul>
            </div>
          </div>
          <div onClick={showMobileMenu} className="show-menu">
            <img src="Images/menu3.png" alt="" />
          </div>
          {menuOpen && (
            <div className="menu-dropdown" data-aos={`${menuOpen?"zoom-in":"zoom-out"}`}>
              <div onClick={showMobileMenu} className="hide-menu">
                <img src="Images/close.png" alt="Error" />
              </div>
              <ul className="navbar-links">
                {routes &&
                  routes.map((route, index) => (
                    <li key={index}>
                      <Link onClick={hideMenu} className="link" to={route.route}>
                        {route.name}
                      </Link>
                    </li>
                  ))}
              </ul>
              <ul className="lang">
                <li onClick={changLanguage}>
                <img src="Images/uzbekistan.png" alt="" /> <span>Uz</span>
                    </li>
                <li onClick={changLanguage}><img src="Images/russia (2).png" alt="" /> <span>EN</span></li>
                <li onClick={changLanguage}><img src="Images/united-kingdom (2).png" alt="" /> <span>RU</span></li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
