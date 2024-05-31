import React from "react";
import "../Styles/Home.scss"
export default function Home() {
  const elementor_card = [
    {
      id: 1,
      url: "images/.png",
      title: "Free shipping",
      description: "Free shipping on all orders",
    },
    {
      id: 2,
      url: "images/.png",
      title: "Return Guarantee",
      description: "Free shipping on all orders",
    },
    {
      id: 3,
      url: "images/.png",
      title: " Online support 24/7",
      description: " Technical support 24/7",
    },
    {
      id: 4,
      url: "images/.png",
      title: "Secure payment",
      description: "All payment methods accepted",
    },
  ];
const winter_card  =  [
    {id:1, url:"Images/.png", name:"Squares"},
    {id:2, url:"Images/.png", name:"Ikat"},
    {id:3, url:"Images/.png", name:"Circles"},
    {id:4, url:"Images/.png", name:"Geometry blue"},
    {id:5, url:"Images/.png", name:"Tropical leaves"},
    {id:6, url:"Images/.png", name:"Bambi"},
    {id:7, url:"Images/.png", name:"Byzantium"},
    {id:8, url:"Images/.png", name:"Evening garden"},
    {id:9, url:"Images/.png", name:"Feather Marquis"},
    {id:10, url:"Images/.png", name:"Lavender roses"},
];
const autumn_card  =  [
    {id:1, url:"Images/.png", name:"Squares"},
    {id:2, url:"Images/.png", name:"Ikat"},
    {id:3, url:"Images/.png", name:"Circles"},
    {id:4, url:"Images/.png", name:"Geometry blue"},
    {id:5, url:"Images/.png", name:"Tropical leaves"},
    {id:6, url:"Images/.png", name:"Bambi"},
    {id:7, url:"Images/.png", name:"Byzantium"},
    {id:8, url:"Images/.png", name:"Evening garden"},
    {id:9, url:"Images/.png", name:"Feather Marquis"},
    {id:10, url:"Images/.png", name:"Lavender roses"},
];
const summer_card  =  [
    {id:1, url:"Images/.png", name:"Squares"},
    {id:2, url:"Images/.png", name:"Ikat"},
    {id:3, url:"Images/.png", name:"Circles"},
    {id:4, url:"Images/.png", name:"Geometry blue"},
    {id:5, url:"Images/.png", name:"Tropical leaves"},
    {id:6, url:"Images/.png", name:"Bambi"},
    {id:7, url:"Images/.png", name:"Byzantium"},
    {id:8, url:"Images/.png", name:"Evening garden"},
    {id:9, url:"Images/.png", name:"Feather Marquis"},
    {id:10, url:"Images/.png", name:"Lavender roses"},
];
const news_card = [

]
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home-bg">
          <div className="left-content">
            <img src="Images/111.pn" alt="There is an error" />
          </div>
          <div className="right-content">
            <h3></h3>
            <h2>Natural</h2>
            <h1>Product</h1>
          </div>
        </div>
        <div className="elementor-section">
          {elementor_card &&
            elementor_card.map((item, index) => (
              <div key={index} className="content">
                <div className="image">
                  <img src={item.url} alt={item.description} />
                </div>
                <div className="text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="media-section">
            <img src="Images//png" alt="" />
          <div className="text-left-card">
            <h2>100%</h2>
            <p>Material quality</p>
          </div>
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
                {winter_card&&winter_card.map((card,index)=>(
                    <div className="card" key={index}>
                        <div className="img">
                            <img src={card.url} alt={card.name} />
                        </div>
                        <p>{card.name}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="media-section">
            <img src="Images//png" alt="" />
          <div className="text-left-card">
            <h2>100%</h2>
            <p>Material quality</p>
          </div>
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
                {winter_card&&winter_card.map((card,index)=>(
                    <div className="card" key={index}>
                        <div className="img">
                            <img src={card.url} alt={card.name} />
                        </div>
                        <p>{card.name}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="media-section">
            <img src="Images//png" alt="" />
          <div className="text-left-card">
            <h2>100%</h2>
            <p>Material quality</p>
          </div>
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
                {winter_card&&winter_card.map((card,index)=>(
                    <div className="card" key={index}>
                        <div className="img">
                            <img src={card.url} alt={card.name} />
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
