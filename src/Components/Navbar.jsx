import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lans")||"English");
  useEffect(()=>{
    localStorage.setItem("lans",lang);
  },[lang]);
  const { t, i18n } = useTranslation();
  const routes = [
    { id: 1, route: "/", name: t("home") },
    { id: 1, route: "/collection", name: t("collection") },
    { id: 1, route: "/about", name: t("about") },
    { id: 1, route: "/contact", name: t("contact") },
  ];
  const x = +localStorage.getItem("index");
  const [activeindex, setActiveindex] = useState(x||0);
  
  const activeLink = (id) => {
    setActiveindex(id);
    localStorage.setItem("index", id);
  };
  const showLang = () => {
    if (window.innerWidth > 768) {
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
    if (window.innerWidth < 768) {
      setMenuOpen(!menuOpen);
    }
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLngs', lng);
    if (lng === "uz") {
      setLang(t("uz"));
    } else if (lng === "en") {
      setLang(t("en"));
    } else {
      setLang(t("ru"));
    }
    hideMenu();
    showLang();
  };
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
                      className={`link ${
                        activeindex === index ? "active" : ""
                      }`}
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
                <span>{lang}</span>

                <FontAwesomeIcon
                  className={`caret ${showLangs ? "caret-t" : ""}`}
                  icon={faCaretDown}
                  style={{ color: "#FFD43B" }}
                />
              </button>

              <ul className={`language ${showLangs ? "click" : ""}`}>
                <li onClick={()=>changeLanguage("uz")} className="language-item">
                  {" "}
                  <img src="Images/uzbekistan.png" alt="" /> <span>UZ</span>
                </li>
                <li onClick={()=>changeLanguage("en")} className="language-item">
                  {" "}
                  <img src="Images/russia (2).png" alt="" /> <span>EN</span>
                </li>
                <li onClick={()=>changeLanguage("ru")} className="language-item">
                  {" "}
                  <img src="Images/united-kingdom (2).png" alt="" />{" "}
                  <span>RU</span>
                </li>
              </ul>
            </div>
          </div>
          <div onClick={showMobileMenu} className="show-menu">
            <img src="Images/menu3.png" alt="" />
          </div>
          {menuOpen && (
            <div
              className="menu-dropdown"
              data-aos={`${menuOpen ? "zoom-in" : "zoom-out"}`}
            >
              <div onClick={showMobileMenu} className="hide-menu">
                <img src="Images/close.png" alt="Error" />
              </div>
              <ul className="navbar-links">
                {routes &&
                  routes.map((route, index) => (
                    <li key={index}>
                      <Link
                        onClick={hideMenu}
                        className="link"
                        to={route.route}
                      >
                        {route.name}
                      </Link>
                    </li>
                  ))}
              </ul>
              <ul className="lang">
                <li onClick={()=>changeLanguage("uz")}>
                  <img src="Images/uzbekistan.png" alt="" /> <span>Uz</span>
                </li>
                <li onClick={()=>changeLanguage("en")}>
                  <img src="Images/russia (2).png" alt="" /> <span>EN</span>
                </li>
                <li onClick={()=>changeLanguage("ru")}>
                  <img src="Images/united-kingdom (2).png" alt="" />{" "}
                  <span>RU</span>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
