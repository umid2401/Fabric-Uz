import React from "react";
import "../Styles/Contact.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
export default function Contact() {
  const position = [41.2936, 69.2401];
  const position2 = [37, 65];

  
  const customIcon = new Icon({
    iconUrl: "Images/place.png",
    iconSize: [40, 40],
    popupAnchor: [-0, -76]
  });
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="content-left">
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
        <div className="content-right">
          <div className="map">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Chilonzor-9 25</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           
           
          />
          <Marker position={position} icon={customIcon} >
            <Popup position={position2}>Marhamat joylashuvimiz bilan tanishing!!</Popup>
          </Marker>
        </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
