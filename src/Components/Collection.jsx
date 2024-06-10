import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Modal, Button } from "antd";
import { data } from "../data";
import "..//Styles/Collection.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Collection() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [products, setProducts] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const [input, setInput] = useState("");
  const product = data;
  const input1=useRef();
  const showButton = () => {
    setActive(!active);
  };

  const dataFilerSeason = (season) => {
    const filterData = product.filter((item) => item.season === season);
    setProducts(filterData);
    setActive(!active);
    console.log(filterData);
    console.log(product);
  };
  const dataSort = (sort) => {
    if (sort === "sortAscending") {
      const sortData = product.sort(
        (item1, item2) => +item2.price - +item1.price
      );
      setProducts(sortData);
    } else if (sort === "sortDescending") {
      const sortData = product.sort(
        (item1, item2) => +item1.price - +item2.price
      );
      setProducts(sortData);
    } else if (sort === "initialSort") {
      setProducts(products);
    }
    setActive1(!active1);
  };
  const dataFilterName = () => {
    const filterData = product.filter((item) => item.name_en === input);
    if (filterData.length !== 0) {
      setProducts(filterData);
      input1.current.value="";
    } else {
      setProducts(null);
      showModal();
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
   setProducts(product);
   input1.current.value="";
  };
  const navigationFun = (item) => {
    navigate(`/${item}`);
  };
  const { t } = useTranslation();
  return (
    <div className="collection">
      <div className="collection-wrapper">
        <div className="left-box">
          <div className="btn-dropdown">
            <div className="input">
              <div className="input-group">
                <input
                  ref={input1}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  type="text"
                  placeholder={t("serach")}
                />
                <div className="search">
                  <img
                    onClick={dataFilterName}
                    src="Images/icons8-search-24.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="button">
              <button onClick={showButton}>
                <span>{t("collection")}</span>
                <FontAwesomeIcon
                  className={`icon ${active ? "active" : ""}`}
                  icon={faCaretRight}
                  style={{ color: "#FFD43B" }}
                />
              </button>
            </div>
            <div className={`collection ${active ? "active" : ""}`}>
              <span onClick={() => dataFilerSeason("spring")}>
                {t("s-col")}{" "}
              </span>
              <span onClick={() => dataFilerSeason("summer")}>
                {t("su-col")}{" "}
              </span>
              <span onClick={() => dataFilerSeason("winter")}>
                {t("w-col")}{" "}
              </span>
              <span onClick={() => dataFilerSeason("autumn")}>
                {t("a-col")}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="collection-filter-container">
            <div className="left-content">
              <h1>{t("collection")} </h1>
              <p>{t("show")} 1-16 of 76</p>
            </div>
            <div className="right-content">
              <button onClick={() => setActive1(!active1)}>
                {t("initial")}{" "}
              </button>
              <div className={`select ${active1 ? "active" : ""}`}>
                <span onClick={() => dataSort("initialSort")}>
                  {t("initial")}
                </span>
                <span onClick={() => dataSort("sortAscending")}>
                  {t("ascending")}
                </span>
                <span onClick={() => dataSort("sortDescending")}>
                  {t("descending")}
                </span>
                <span onClick={() => dataSort("popularSort")}>
                  {t("popular")}
                </span>
              </div>
            </div>
          </div>
          <div className="cards">
            {products ? (
              products.map((card, index) => (
                <div
                  onClick={() => navigationFun(card.name)}
                  className="card"
                  key={index}
                >
                  <div className="img">
                    <img src={card.imgUrl} alt={card.name} />
                  </div>
                  <p>{card.name_en}</p>
                </div>
              ))
            ) : (
              <div>
                <Modal
                  cancelButtonProps={true}
                  open={isModalOpen}
                  
                  footer={
                  <Button type="primary" onClick={handleOk}>
                  Ok
                  </Button>
                  }
                >
                  <p style={{textAlign:"center", fontSize:"22px", color:"black"}}>Product not found</p>
                  
                </Modal>
              </div>
            )}
          </div>
          <div className="pagination">
            {/* <Pagination responsive={true} defaultCurrent={1} total={50} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
