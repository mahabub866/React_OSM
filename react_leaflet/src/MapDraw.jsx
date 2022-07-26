import React, { useRef, useState } from "react";
import "./index.css";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const MapDrawer = () => {
  const [center, setCenter] = useState([51.505, -0.09]);
  const [mapLayers, setMapLayers] = useState([]);

  const zoom_level = 12;
  const mapRef = useRef();
  const _onCreated = (e) => {
    console.log(e);
    const { layerType, layer } = e;
    if (layerType === "polyline") {
      const { _leaflet_id } = layer;
      setMapLayers((layers) => [
        ...layers,
        {
          id: _leaflet_id,
          latlngs: layer._latlngs,
          color: layer.options.color,
          color_opacity: layer.options.opacity,
          color_width: layer.options.weight,
          smoothFactor: layer.options.smoothFactor,
        },
      ]);
    }
    
  };

  const _onEdited = (e) => {
    console.log(e);
    const {
      layers: { _layers },
    } = e;
    Object.values(_layers).map(({ _leaflet_id, editing }) => {
      setMapLayers((layers) =>
        layers.map((l) => l.id === _leaflet_id
          ? { ...l, latlngs: { ...editing.latlngs[0] } }
          : l)
      );
    });
  };
  const _onDeleted = (e) =>{
    console.log(e);
    const {
      layers: { _layers },
    } = e;
    Object.values(_layers).map(({ _leaflet_id }) => {
      setMapLayers((layers) =>
        layers.filter((l)=>l.id !==_leaflet_id)
      );
    });
  }

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
            <FeatureGroup>
              <EditControl
                position="topright"
                onCreated={_onCreated}
                onEdited={_onEdited}
                onDeleted={_onDeleted}
                draw={
                  {
                       rectangle: false,
                     circle: false,
                       circlemarker: false,
                       polygon:false,
                    //   marker: false,
                  }
                }
              />
            </FeatureGroup>
            
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
          {console.log(mapLayers)}
          {console.log(mapLayers.color)}
          <pre>{JSON.stringify(mapLayers, 0, 2)}</pre>
        </div>
      </div>
    </>
  );
};

export default MapDrawer;
