import React from "react";
import { Marker, Popup } from "react-leaflet";
import Link from "next/link";
import "./map.css";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img
            className="w-[64px] h-[80] object-contain"
            src={item.image[0].url}
            alt=""
          />
          <div className="textContainer">
            <Link href={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
