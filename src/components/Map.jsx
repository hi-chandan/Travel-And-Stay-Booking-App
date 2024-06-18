"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Pin = dynamic(() => import("./Pin"), { ssr: false });

const iconUrl = "/location.svg";

const Map = ({ items }) => {
  console.log("This is items", items);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      const DefaultIcon = L.icon({
        iconUrl,
        iconSize: [25, 41], // size of the icon
        iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
        popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
        shadowSize: [41, 41], // size of the shadow
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    }
  }, []);
  if (!Array.isArray(items)) {
    if (items === undefined || items === null) {
      items = [];
    } else {
      console.log("This is elses [items]");
      items = [items]; // if not array so convert into an array
    }
  }

  const val = items?.length;
  console.log("This is value length ", val);
  return (
    <div className="w-full  h-full  ">
      <MapContainer
        center={
          val === 1
            ? [items[0].latitude, items[0].longitude]
            : [52.4797, -1.90269]
        }
        zoom={7}
        scrollWheelZoom={false}
        className="w-full h-full "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Pin item={item} key={item.id} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
