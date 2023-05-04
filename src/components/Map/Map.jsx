import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";

export default function Map() {
  return (
    <MapContainer
      center={[-8.8788578, 13.1985628, 21]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-8.8788578, 13.1985628, 21]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
