import React from "react";
import "../Styles/Home.scss"
export default function Home(props) {
  const {data} = props;
  console.log(data);
  const elementor_card = [
    {
      id: 1,
      url: "images/group.png",
      title: "Free shipping",
      description: "Free shipping on all orders",
    },
    {
      id: 2,
      url: "images/guarantee.png",
      title: "Return Guarantee",
      description: "Free shipping on all orders",
    },
    {
      id: 3,
      url: "images/delivry.png",
      title: " Online support 24/7",
      description: " Technical support 24/7",
    },
    {
      id: 4,
      url: "images/wallet.png",
      title: "Secure payment",
      description: "All payment methods accepted",
    },
  ];

const winterData = data.filter(item => item.season === "winter");
const autumnData = data.filter(item => item.season === "autumn");
const summerData = data.filter(item => item.season === "summer");

  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home-bg">
          <div className="left-content">
            <img src="Images/position1.png" alt="There is an error" />
          </div>
          <div className="right-content">
            <h3>Mattresses</h3>
            <h2>Natural</h2>
            <h1>Product</h1>
          </div>
        </div>
        <div className="elementor-section">
          {elementor_card &&
            elementor_card.map((item, index) => (
              <div key={index} className="content">
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
            <p>Material quality</p>
          </div>
          <img src="Images/position2.png" alt="" />
          <div className="text-right-card">
            <h2>Natural Product</h2>
            <p>
              Has been company that produces cotton fabrics for use all over the
              world for many years
            </p>
            <button>Collection</button>
          </div>
        </div>
        <div className="winter-collection">
            <h2>Winter collection</h2>
            <p>Natural Product</p>
            <div className="cards">
                {winterData&&winterData.map((card,index)=>(
                    <div className="card" key={index}>
                        <div className="img">
                            <img src={card.imgUrl} alt={card.name} />
                        </div>
                        <p>{card.name}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="media-section media-section2">
          <div className="text-left-card">
            <h2>100%</h2>
            <p>Material quality</p>
          </div>
          <img src="Images/position3.png" alt="" />
          <div className="text-right-card">
            <h2>Natural Product</h2>
            <p>
              Has been company that produces cotton fabrics for use all over the
              world for many years
            </p>
            <button>Collection</button>
          </div>
        </div>
        <div className="autumn-collection">
            <h2>Autumn collection</h2>
            <p>Natural Product</p>
            <div className="cards">
                {summerData&&summerData.map((card,index)=>(
                    <div className="card" key={index}>
                        <div className="img">
                            <img src={card.imgUrl} alt={card.name} />
                        </div>
                        <p>{card.name}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="media-section media-section3">
          <div className="text-left-card">
            <h2>100%</h2>
            <p>Material quality</p>
          </div>
          <img src="Images/position4.png" alt="" />
          <div className="text-right-card">
            <h2>Natural Product</h2>
            <p>
              Has been company that produces cotton fabrics for use all over the
              world for many years
            </p>
            <button>Collection</button>
          </div>
        </div>
        <div className="summer-collection">
            <h2>Summer collection</h2>
            <p>Natural Product</p>
            <div className="cards">
                {autumnData&&autumnData.map((card,index)=>(
                    <div className="card" key={index}>
                        <div className="img">
                            <img src={card.imgUrl} alt={card.name} />
                        </div>
                        <p>{card.name}</p>
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
