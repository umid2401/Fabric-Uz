import React from "react";
import "../Styles/About.scss"
import { useTranslation } from "react-i18next";
export default function About() {
  const {t}=useTranslation()
  const cards = [
    {
      id: 1,
      description: t("fmatters"),
      imgUrl: "https://images.unsplash.com/photo-1595526112436-eef3b51d64c6",
    },
    {
      id: 2,
      description:t("omatters"),
      imgUrl: "https://images.unsplash.com/photo-1589382195779-1cedb8e3d8e6",
    },
    {
      id: 3,
      description:t("mmatters"),
      imgUrl: "https://images.unsplash.com/photo-1600488998979-2b4dbb3a0476",
    },
    {
      id: 4,
      description:t("lmatters"),
      imgUrl: "https://images.unsplash.com/photo-1603202114183-091c5a5d8ee1",
    },
    {
      id: 5,
      description: t("hmatters"),
      imgUrl: "https://images.unsplash.com/photo-1583224482747-5f6c3f80f4f3",
    },
    {
      id: 6,
      description:t("gmatters"),
      imgUrl: "https://images.unsplash.com/photo-1620912185364-1528cd3f56bb",
    },
    {
      id: 7,
      description: t("amatters"),
      imgUrl: "https://images.unsplash.com/photo-1600508773045-54b1ac3f0800",
    },
    {
      id: 8,
      description:t("wmatters"),
      imgUrl: "https://images.unsplash.com/photo-1596732412038-94d71a78e29e",
    },
    {
      id: 9,
      description: t("fmatters"),
      imgUrl: "https://images.unsplash.com/photo-1616627890955-ea95d3c86f95",
    },
    {
      id: 10,
      description:t("imatters"),
      imgUrl: "https://images.unsplash.com/photo-1622401194281-97108f2766c5",
    },
  ];

  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="natural-product">
          <div className="left-box">
            <h2>{t("natural") } {t("product") } </h2>
            <div className="boxes">
              {cards &&
                cards.map((item, index) => (
                  <div key={index} className="box">
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
