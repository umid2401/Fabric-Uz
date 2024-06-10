import React, { useEffect } from "react";
import "../Styles/Home.scss"
import { useNavigate } from "react-router-dom";
import {data} from "../data";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const navigate = useNavigate();
  useEffect(()=>{
    AOS.init({
      duration:2000,
    })
  },[])
  const {t}=useTranslation();
  const card = [{
    id: 1,
    url: "Images/group.png",
    title: t("ship"),
    description: t("ship1"),
  },
  {
    id: 2,
    url: "Images/guarantee.png",
    title: t("return"),
    description: t("return1"),
  },
  {
    id: 3,
    url: "Images/delivry.png",
    title: t("sup1"),
    description: t("sup2"),
  },
  {
    id: 4,
    url: "Images/wallet.png",
    title: t("secure1"),
    description: t("secure2"),
  },]
const winterData = data.filter(item => item.season === "winter");
const autumnData = data.filter(item => item.season === "autumn");
const summerData = data.filter(item => item.season === "summer");
const navigationFun = (item) =>{
  navigate(`/${item}`)
}
const toCollect=()=>{
  navigate("/collection");
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

  return (
    <div className="home">
      
      <div className="home-wrapper">
        <div className="home-bg">
          <div className="left-content">
            <img src="Images/position1.png" alt="There is an error" />
          </div>
          <div className="right-content">
            <h3>Mattresses</h3>
            <h2>{t("natural")}</h2>
            <h1>{t("product")}</h1>
          </div>
        </div>
        <div className="elementor-section">
          {card &&
            card.map((item, index) => (
              <div key={index} className="content" >
                <div className="image">
                  <img src={item.url} alt="error" />
                </div>
                <div className="text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="media-section media-section1">
          <div className="text-left-card">
            <h2>100%</h2>
            <p>{t("quality")}</p>
          </div>
          <img src="Images/position2.png" alt="" />
          <div className="text-right-card">
            <h2>{t("natural")} {t("product")}</h2>
            <p>
            {t("des")}
            </p>
            <button onClick={toCollect}>Collection</button>
          </div>
        </div>
        <div className="winter-collection">
            <h2>{t("w-col")}</h2>
            <div className="cards">
                {winterData&&winterData.map((card,index)=>(
                    <div data-aos="fade-up" className="card" key={index} onClick={()=>navigationFun(card.name)}>
                        <div className="img">
                            <img src={card.imgUrl} alt={card.name} />
                        </div>
                        <p>{card.name_en}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="media-section media-section2">
          <div className="text-left-card">
            <h2>100%</h2>
            <p>{t("quality")}</p>
          </div>
          <img src="Images/position2.png" alt="" />
          <div className="text-right-card">
            <h2>{t("natural")} {t("product")}</h2>
            <p>
            {t("des")}
            </p>
            <button onClick={toCollect}>Collection</button>
          </div>
        </div>
        <div data-aos="fade-up" className="autumn-collection">
            <h2>{t("a-col")}</h2>
           
            <div className="cards">
                {summerData&&summerData.map((card,index)=>(
                    <div onClick={()=>navigationFun(card.name)} className="card" key={index}>
                        <div className="img">
                            <img src={card.imgUrl} alt={card.name} />
                        </div>
                        <p>{card.name_en}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="media-section media-section3">
          <div className="text-left-card">
            <h2>100%</h2>
            <p>{t("quality")}</p>
          </div>
          <img src="Images/position2.png" alt="" />
          <div className="text-right-card">
            <h2>{t("natural")} {t("product")}</h2>
            <p>
            {t("des")}
            </p>
            <button onClick={toCollect}>Collection</button>
          </div>
        </div>
        <div className="summer-collection">
            <h2>{t("su-col")}</h2>
            
            <div className="cards">
                {autumnData&&autumnData.map((card,index)=>(
                    <div data-aos="fade-up" onClick={()=>navigationFun(card.name)} className="card" key={index}>
                        <div className="img">
                            <img src={card.imgUrl} alt={card.name} />
                        </div>
                        <p>{card.name_en}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="news-section">
            <div className="news-card">
                <div className="news-img"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
