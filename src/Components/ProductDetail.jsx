import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/ProductDetail.scss";
import { data } from "../data";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useTranslation } from "react-i18next";
export default function ProductDetail() {
  const {t}=useTranslation();
  const { id } = useParams();
  const product = data.filter((item) => item.name === id);
  const [name] = product;
  console.log(id,product)
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
              <h2>{id}</h2>
              <table className="responsive-table">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Description</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Umid</td>
                    <td>Lorem, ipsum dolor.</td>
                  </tr>
                  <tr>
                    <td>Umid</td>
                    <td>Lorem, ipsum dolor.</td>
                  </tr>
                  <tr>
                    <td>Umid</td>
                    <td>Lorem, ipsum dolor.</td>
                  </tr>
                  <tr>
                    <td>Umid</td>
                    <td>Lorem, ipsum dolor.</td>
                  </tr>
                  <tr>
                    <td>Umid</td>
                    <td>Lorem, ipsum dolor.</td>
                  </tr>
                </tbody>
              </table>
              <p>{t("category")}:{name.season}</p>
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
                <h2>{name.name}</h2>
                <p>
                  {t("m-des")}
                </p>
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
                      <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="number">
                      <input type="number" placeholder="Phone number" />
                    </div>
                    <div className="textarea">
                      <textarea
                        name=""
                        id=""
                        placeholder="Your message here"
                      ></textarea>
                    </div>
                    <button type="submit">Submit</button>
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
