
import './App.css';
import { MapContainer, TileLayer, Tooltip ,Marker,Popup,Polyline,Polygon,Circle,CircleMarker,Rectangle,SVGOverlay} from 'react-leaflet'

import 'leaflet/dist/leaflet.css';

const center = [51.505, -0.09]

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
  [51.52, -0.06],
  [51.53, -0.13],
  [51.53, -0.07],
  [51.49, -0.08],
]

const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
]

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]
const position = [51.505, -0.09]
const bounds = [
  [51.49, -0.08],
  [51.5, -0.06],
]
const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: 'black' }
const limeOptions = { color: 'lime' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' }


function App() {
  return (
    

      <MapContainer center={[51.505, -0.09]} zoom={13} style={{width:'100vw',height:'100vh'}}scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
 
 {/* <Circle center={center} pathOptions={fillBlueOptions} radius={100} /> */}
    {/* <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
      <Popup>Popup in CircleMarker</Popup>
    </CircleMarker> */}
    <Polyline pathOptions={limeOptions} positions={polyline} />
    {/* <Polyline pathOptions={limeOptions} positions={multiPolyline} />
    <Polygon pathOptions={purpleOptions} positions={polygon} />
    <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
    <Rectangle bounds={rectangle} pathOptions={blackOptions} />
    <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
      <rect x="0" y="0" width="100%" height="100%" fill="blue" />
      <circle r="5" cx="10" cy="10" fill="red" />
      <text x="50%" y="50%" stroke="white">
        text
      </text>
    </SVGOverlay>
    <Marker position={[51.51, -0.09]}>
      <Popup>Popup for Marker</Popup>
      <Tooltip>Tooltip for Marker</Tooltip>
    </Marker> */}
</MapContainer>

  );
}

export default App;
