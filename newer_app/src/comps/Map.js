import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import Mark from "./Marker";
import preferencias from "../settings/preferences.json";

const Map = () => {


  return (
    <MapContainer {...preferencias.preferences}>
      <TileLayer {...preferencias.basemap} />
      <Mark position={[51.505, -0.09]} />
      {/* aca colocar el wms tile layer */}
    </MapContainer>
  );
};

export default Map;
