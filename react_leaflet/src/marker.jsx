import React, { useRef, useState } from "react";
import "./index.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import cities from "./cities.json";

const markerIcon = new L.Icon({
  iconUrl: require("./marker.jpg"),
  iconSize: [35, 45],
  iconAnchor: [17, 46], //[left/right, top,bottom]
  popupAnchor: [0, -46], //[left/right,top/bottom]
});

const MarkerMap = () => {
  const [center, setCenter] = useState([30.912042, 75.853789]);
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
        React Leaflet Map Marker
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

            {cities.map((city, id) => (
              <Marker position={[city.lat, city.lng]} icon={markerIcon}
              key={id}
              >
               { console.log(city)}

                <Popup>
                  <b>{city.city},{city.country}</b>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MarkerMap;
