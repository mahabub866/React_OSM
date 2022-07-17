import React, {Component,useState} from 'react'
import { MapContainer, TileLayer, Marker,useMapEvents,Popup } from 'react-leaflet'



function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position} removable editable>
            <Popup>You are here</Popup>
        </Marker>
    )
}
class CurrentPosition extends Component{
    render(){
        return(
            <MapContainer
                center={{ lat: 51.505, lng: -0.09 }}
                zoom={13}
                scrollWheelZoom={false}
                id="mapId">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
        )
    }

}


export default CurrentPosition;