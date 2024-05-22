import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import Mark from "./Marker";
import preferencias from "../settings/preferences.json";
import EventoClick from "./EventoClick";

const Map = () => {
  return (
    <MapContainer {...preferencias.preferences}>
      <TileLayer {...preferencias.basemap} />
      <Mark position={[51.505, -0.09]} />
      {/* datos obtenidos de https://wms.ign.gob.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities */}
      <WMSTileLayer {...preferencias.layers} />
      <EventoClick />
    </MapContainer>
  );
};

export default Map;
