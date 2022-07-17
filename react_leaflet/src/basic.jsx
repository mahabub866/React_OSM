import React, { useRef, useState } from "react";
import "./index.css";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
const BasicMap = () => {
  const [center, setCenter] = useState([51.505, -0.09]);
  const zoom_level = 12;
  const mapRef = useRef();
  return (
    <>
      <h1
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        React Leaflet Map Example
      </h1>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h2>React-leaflet - Basic Openstreet map</h2>
          <p>Loading Basic Map Using layer from maptiler</p>
          <MapContainer
            center={center}
            zoom={zoom_level}
            ref={mapRef}
            style={{ width: "80vw", height: "70vh" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default BasicMap;
