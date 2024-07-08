import React, { useRef, useState } from "react";
import "..//Styles/Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import axios from "axios";
export default function Footer(props) {
  const { t } = useTranslation();
  const routes = [
    { id: 1, route: "/", name: t("home") },
    { id: 2, route: "/collection", name: t("collection") },
    { id: 3, route: "/about", name: t("about") },
    { id: 4, route: "/contact", name: t("contact") },
  ];
  const scrollTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const [email, setEmail]=useState();
  const email1=useRef();
  const msg = `Email: ${email}\n `;
  const id1 = props.data.id;
  const token = props.data.token;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const sendData = async (e) => {
    e.preventDefault();
    if (
      email1.current.value !== "" 
      
    ) {
      try {
        await axios.post(url, {
          chat_id: id1,
          text: msg,
        });
        email1.current.value = "";
        
        Modal.success({
          content: "Data succesfull",
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      Modal.warning({
        content: "Input is empty",
      });
    }
  };
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-cards">
          <div className="footer-card card1">
            <div className="logo">
              <Link to="/" onClick={scrollTop}>
              <img src="Images/npfabric.png" alt="" />
              </Link>
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
                    <Link onClick={scrollTop} className="link" to={route.route}>
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
                      <input ref={email1} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder={t("e-email")} />
                    </div>
                    <div className="btn">
                      <button type="submit" onClick={sendData}>{t("sub1")} </button>
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
