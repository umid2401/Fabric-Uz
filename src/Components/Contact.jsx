import React, { useRef, useState } from "react";
import "../Styles/Contact.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Modal } from "antd";
export default function Contact({data}) {
  const position = [38.266, 67.9000];

  const [email, setEmail]=useState();
  const [number, setNumber]=useState();
  const [area, setArea]=useState();
  const email1=useRef();
  const number1=useRef();
  const textarea =useRef();
  const msg = `Email: ${email}\n Phone: ${number}\n Text: ${area}`;
  const id=data.id;
  const token=data.token;
  const url=`https://api.telegram.org/bot${token}/sendMessage`;
  const sendData=async(e)=>{
    e.preventDefault();
    if(email1.current.value!=="" &&number1.current.value!=="" &&textarea.current.value!==""){
      try{
        await axios.post(url,{
          chat_id: id,
          text:msg,
        });
        email1.current.value="";
        number1.current.value="";
        textarea.current.value="";
        Modal.success({
          content: 'Data succesfull',
        });
      } catch (err){
        console.log(err)
      }
    }
    else{

      Modal.warning({
        content: 'Input is empty',
      });
    }
  }
  
  const {t}=useTranslation();
  const customIcon = new Icon({
    iconUrl: "Images/location.png",
    iconSize: [40, 40],
    popupAnchor: [-0, -76]
  });
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="content-left">
          <h2>{t("contact")}</h2>
          <form action="">
            <div className="input">
              <input required onChange={(e)=>{setEmail(e.target.value)}}  ref={email1} type="email" placeholder={t("e-email")} />
            </div>
            <div className="number">
              <input required onChange={(e)=>{setNumber(e.target.value)}} ref={number1} type="number" placeholder={t("p-number")}  />
            </div>
            <div className="textarea">
              <textarea
               required
                 onChange={(e)=>{setArea(e.target.value)}}
                ref={textarea}
                name=""
                id=""
                placeholder={t("y-message")} 
              ></textarea>
            </div>
            <button type="submit" onClick={sendData}>{t("submit")} </button>
          </form>
        </div>
      
        <div className="content-right">
          <div className="map">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Denov A.Navoiy</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           
           
          />
          <Marker position={position} icon={customIcon} >
            <Popup position={position}>Marhamat joylashuvimiz bilan tanishing!!</Popup>
          </Marker>
        </MapContainer>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info-card">
          <div className="info-img">
          <FontAwesomeIcon className="icon" icon={faEnvelope} style={{color: "#e7311d"}} />
          </div>
          <div className="info-text">
            <p><span>{t("email")} :</span> mattresses@info.uz</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-img">
          <FontAwesomeIcon className="icon" icon={faPhone} style={{color: "#e7311d"}} />
          </div>
          <div className="info-text">
            <p><span>{t("phone")} :</span> +9989456537865</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-img">
          <FontAwesomeIcon className="icon" icon={faLocationDot} style={{color: "#e7311d"}} />
          </div>
          <div className="info-text">
            <p><span>{t("adress")} :</span> Denov, st A.Navoiy 96.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
