import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/ProductDetail.scss";
import { data } from "../data";
import { Modal, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useTranslation } from "react-i18next";
import axios from "axios";
export default function ProductDetail(props) {
  const { t } = useTranslation();
  const { id } = useParams();
  const product = data.filter((item) => item.name === id);
  const [name] = product;
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [area, setArea] = useState();
  const email1 = useRef();
  const number1 = useRef();
  const textarea = useRef();
  const msg = `Email: ${email}\n Phone: ${number}\n Text: ${area}`;
  const id1 = props.data.id;
  const token = props.data.token;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const sendData = async (e) => {
    e.preventDefault();
    if (
      email1.current.value !== "" &&
      number1.current.value !== "" &&
      textarea.current.value !== ""
    ) {
      try {
        await axios.post(url, {
          chat_id: id1,
          text: msg,
        });
        email1.current.value = "";
        number1.current.value = "";
        textarea.current.value = "";
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
  const onChange = (key) => {
    console.log(key);
  };
  //   const items = [
  //     {
  //       key: "1",
  //       label: "Description",
  //       children: "Content of Tab Pane 1",
  //     },
  //     {
  //       key: "2",
  //       label: "Reviews",
  //       children: "Content of Tab Pane 2",
  //     },
  //   ];

  return (
    <div className="product-detail">
      {name.name === id ? (
        <div className="product-wrapper">
          <div className="top-product">
            <div className="product-img">
              {product &&
                product.map((item, index) => (
                  <img key={index} src={item.imgUrl} alt={item.name} />
                ))}
            </div>
            <div className="product-description">
              <h2>{name.name_en}</h2>
              <table className="responsive-table">
                {product &&
                  product.map((item, index) => (
                    <>
                      <thead>
                        <tr>
                          <td>Name</td>
                          <td>{item.name_en}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Price</td>
                          <td>{item.price}$</td>
                        </tr>
                        <tr>
                          <td>Season</td>
                          <td>{item.season}</td>
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td>Material Quality</td>
                        </tr>
                        <tr>
                          <td>Category</td>
                          <td>Matresses</td>
                        </tr>
                        <tr>
                          <td>Date</td>
                          <td>19/02/2023</td>
                        </tr>
                      </tbody>
                    </>
                  ))}
              </table>
              <p>
                {t("category")}:{name.season}
              </p>
            </div>
          </div>
          <div className="tabs">
            <Tabs
              className="tab-header"
              centered
              defaultActiveKey="1"
              onChange={onChange}
            >
              <TabPane className="tabPane" tab="Description" key="1">
                <h3>{t("description")}</h3>
                <h2>{name.name_en}</h2>
                <p>{t("m-des")}</p>
              </TabPane>
              <TabPane className="review" tab="Reviews" key="2">
                <div className="content-left">
                  <h3>Add a review</h3>
                  <p>
                    Your email adress will not be published. Required fields are
                    marked{" "}
                  </p>
                  <h2>Contact</h2>
                  <form action="">
                    <div className="input">
                      <input
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        ref={email1}
                        type="email"
                        placeholder={t("e-email")}
                      />
                    </div>
                    <div className="number">
                      <input
                        required
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                        ref={number1}
                        type="number"
                        placeholder={t("p-number")}
                      />
                    </div>
                    <div className="textarea">
                      <textarea
                        required
                        onChange={(e) => {
                          setArea(e.target.value);
                        }}
                        ref={textarea}
                        name=""
                        id=""
                        placeholder={t("y-message")}
                      ></textarea>
                    </div>
                    <button type="submit" onClick={sendData}>
                      {t("submit")}{" "}
                    </button>
                  </form>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      ) : (
        <div>Page Not found</div>
      )}
    </div>
  );
}
