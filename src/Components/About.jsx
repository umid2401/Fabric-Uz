import React, { useEffect } from "react";
import "../Styles/About.scss"
import { useTranslation } from "react-i18next";
import AOS from "aos";
export default function About() {
  const {t}=useTranslation()
  const cards = [
    {
      id: 1,
      description: t("fmatters"),
      imgUrl: "Images/diz-52-768x768.jpg",
    },
    {
      id: 2,
      description:t("omatters"),
      imgUrl: "Images/diz-54-768x768.jpg",
    },
    {
      id: 3,
      description:t("mmatters"),
      imgUrl: "Images/diz-16-768x768.jpg",
    },
    {
      id: 4,
      description:t("lmatters"),
      imgUrl: "Images/diz-17-768x768.jpg",
    },
    {
      id: 5,
      description: t("hmatters"),
      imgUrl: "Images/diz-19-768x768.jpg",
    },
    {
      id: 6,
      description:t("gmatters"),
      imgUrl:"Images/diz-20-768x768.jpg",
    },
    {
      id: 7,
      description: t("amatters"),
      imgUrl: "Images/diz-25-768x768.jpg",
    },
    {
      id: 8,
      description:t("wmatters"),
      imgUrl: "Images/diz-27-768x768.jpg",
    },
    {
      id: 9,
      description: t("fmatters"),
      imgUrl: "Images/diz-31-768x768.jpg",
    },
    {
      id: 10,
      description:t("imatters"),
      imgUrl:  "Images/diz-32-768x768.jpg",
    },
  ];
useEffect(()=>{
  AOS.init({
    duration:2000,
  })
},[])
  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="natural-product">
          <div className="left-box">
            <h2 data-aos="fade-in">{t("natural") } {t("product") } </h2>
            <div className="boxes">
              {cards &&
                cards.map((item, index) => (
                  <div data-aos="fade-up" key={index} className="box">
                    <div className="img">
                      <img src={item.imgUrl} alt={item.id} />
                    </div>
                    <div className="text">
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="right-box">
            <div className="right-img">
              <img src="Images/about.png" alt="Error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
