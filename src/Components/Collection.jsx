import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {data} from "../data";
import "..//Styles/Collection.scss";
export default function Collection() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [products, setProducts] = useState(data);
  const product=data;
  const showButton = () => {
    setActive(!active);
  };
  
  const dataFilerSeason = (season) =>{
    const filterData = product.filter(item=>item.season===season);
    setProducts(filterData);
    setActive(!active);
    console.log(filterData);
    console.log(product)
  }
  // useEffect(()=>{
  //   dataFilerSeason();
  // },[])
  return (
    <div className="collection">
      <div className="collection-wrapper">
        <div className="left-box">
          <div className="btn-dropdown">
            <div className="input">
              <div className="input-group">
                <input type="text" placeholder="Search here" />
                <div className="search">
                  <img src="Images/icons8-search-24.png" alt="" />
                </div>
              </div>
            </div>
            <div className="button">
              <button onClick={showButton}>
                <span>Collection</span>
                <FontAwesomeIcon
                  className={`icon ${active ? "active" : ""}`}
                  icon={faCaretRight}
                  style={{ color: "#FFD43B" }}
                />
              </button>
            </div>
            <div className={`collection ${active ? "active" : ""}`}>
              <span onClick={()=>dataFilerSeason("spring")} >Spring collection</span>
              <span onClick={()=>dataFilerSeason("summer")} >Summer collection</span>
              <span onClick={()=>dataFilerSeason("winter")} >Winter collection</span>
              <span onClick={()=>dataFilerSeason("autumn")} >Autumn collection</span>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="collection-filter-container">
           <div className="left-content">
            <h1>Collection</h1>
            <p>Showing 1-16 of 76</p>
           </div>
           <div className="right-content">
            <button onClick={()=>setActive1(!active1)}>Initial Sort</button>
            <div className={`select ${active1?"active":""}`}>
              <span>Initial sort</span>
              <span>Price: ascending</span>
              <span>Price: descending</span>
              <span>By popularity</span>
            </div>
           </div>
          </div>
          <div className="cards">
              {products?(
                products.map((card,index)=>(
                  <div className="card" key={index}>
                    <div className="img">
                            <img src={card.imgUrl} alt={card.name} />
                        </div>
                        <p>{card.name}</p>
                  </div>
                ))
              ):(
                <div>Product not found</div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
