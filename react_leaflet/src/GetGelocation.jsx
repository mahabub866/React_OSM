import React, { useRef, useState } from "react";
import "./index.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import useGeoLocation from "./useGeoLocation";
const markerIcon = new L.Icon({
    iconUrl: require("./marker.jpg"),
    iconSize: [35, 45],
    iconAnchor: [17, 46], //[left/right, top,bottom]
    popupAnchor: [0, -46], //[left/right,top/bottom]
  });
const GetLocation = () => {
  const [center, setCenter] = useState([30.912042, 75.853789]);
  const zoom_level = 12;
  const mapRef = useRef();
  const location=useGeoLocation();

  const showMyLocation=()=>{
    if(location.loaded && !location.error){
        mapRef.current.leafletElement.flyTo([location.coordinates.lat,location.coordinates.lng],zoom_level,{animate:true})
    }
  else{
    alert(location.error.message)
  }}
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
            {location.loaded && !location.error &&(
                <Marker icon={markerIcon} position={[location.coordinates.lat,location.coordinates.lng]}></Marker>
            )}
          </MapContainer>
          <div>
        <button type="button" onClick={showMyLocation}>Locate Me</button>
      </div>
        </div>
        
      </div>
      
      
    </>
  );
};

export default GetLocation;
