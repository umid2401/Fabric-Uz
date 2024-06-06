import React from "react";
import "..//Styles/Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  const routes = [
    { id: 1, route: "/", name: t("home") },
    { id: 1, route: "/collection", name: t("collection") },
    { id: 1, route: "/about", name: t("about") },
    { id: 1, route: "/contact", name: t("contact") },
  ];
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-cards">
          <div className="footer-card card1">
            <div className="logo">
              <img src="Images/logo.png" alt="" />
            </div>
            <div className="logo-text">
              <p>
                {t("des2")}
              </p>
            </div>
          </div>
          <div className="footer-card card2">
            <h4>{t("menu")}</h4>
            <ul className="footer-links">
              {routes &&
                routes.map((route, index) => (
                  <li key={index}>
                    <Link className="link" to={route.route}>
                      {route.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="footer-card card3">
                <h4>{t("contact")} </h4>
                <ul>
                  <li>Denov, st A.Navoiy 96.</li>
                  <li>mattresses@gmail.com</li>
                  <li>fabric_matresses</li>
                  <li>naturalproduct@gmail.com</li>
                  <li>+998945643212</li>
                  <li>+998945143423</li>
                </ul>
          </div>
          <div className="footer-card card4">
                <h4>{t("sub")} </h4>
                <div className="btn-group">
                  <form action="">
                    <div className="input">
                      <input type="email" placeholder={t("e-email")} />
                    </div>
                    <div className="btn">
                      <button type="submit">{t("sub1")} </button>
                    </div>
                  </form>
                </div>
          </div>
        </div>
        
      </div>
      <div className="boxes">
          <p>© 2024 LLC "MATTRESSES NATURAL PRODUCT". All rights reserved.</p>
        </div>
    </div>
  );
}
