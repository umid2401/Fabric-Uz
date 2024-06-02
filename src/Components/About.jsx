import React from "react";
import "../Styles/About.scss"
export default function About() {
  const cards = [
    {
      id: 1,
      description:
        "Traditional Mattress: A conventional spring mattress covered with soft fabrics, providing a comfortable sleep.",
      imgUrl: "https://images.unsplash.com/photo-1595526112436-eef3b51d64c6",
    },
    {
      id: 2,
      description:
        "Orthopedic Mattress: A mattress specially designed to support the back and joints, often recommended by doctors.",
      imgUrl: "https://images.unsplash.com/photo-1589382195779-1cedb8e3d8e6",
    },
    {
      id: 3,
      description:
        "Memory Foam Mattress: Made from material that conforms to the shape of the body and responds to body temperature, reducing pressure points.",
      imgUrl: "https://images.unsplash.com/photo-1600488998979-2b4dbb3a0476",
    },
    {
      id: 4,
      description:
        "Latex Mattress: Made from natural or synthetic latex, featuring hypoallergenic properties and high breathability.",
      imgUrl: "https://images.unsplash.com/photo-1603202114183-091c5a5d8ee1",
    },
    {
      id: 5,
      description:
        "Hybrid Mattress: Combines multiple materials, such as springs and memory foam or latex, to offer diverse benefits.",
      imgUrl: "https://images.unsplash.com/photo-1583224482747-5f6c3f80f4f3",
    },
    {
      id: 6,
      description:
        "Gel Infused Mattress: Made from memory foam infused with gel, helping to regulate body temperature.",
      imgUrl: "https://images.unsplash.com/photo-1620912185364-1528cd3f56bb",
    },
    {
      id: 7,
      description:
        "Airbed Mattress: An inflatable mattress with adjustable firmness, often used for travel or temporary sleeping arrangements.",
      imgUrl: "https://images.unsplash.com/photo-1600508773045-54b1ac3f0800",
    },
    {
      id: 8,
      description:
        "Waterbed Mattress: Filled with water, providing a floating effect and excellent support.",
      imgUrl: "https://images.unsplash.com/photo-1596732412038-94d71a78e29e",
    },
    {
      id: 9,
      description:
        "Futon Mattress: Typically foldable and used as a daytime sofa, a thin and portable mattress.",
      imgUrl: "https://images.unsplash.com/photo-1616627890955-ea95d3c86f95",
    },
    {
      id: 10,
      description:
        "Innerspring Mattress: Features a traditional coil system, offering good ventilation and long-lasting durability.",
      imgUrl: "https://images.unsplash.com/photo-1622401194281-97108f2766c5",
    },
  ];

  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="natural-product">
          <div className="left-box">
            <h2>Natural Product</h2>
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
