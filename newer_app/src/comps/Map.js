import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import preferencias from "../settings/preferences.json";
import EventoClick from "./EventoClick";

const Map = () => {
  return (
    <MapContainer {...preferencias.preferences}>
      <TileLayer {...preferencias.basemap} />
      {/* datos obtenidos de https://wms.ign.gob.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities */}
      <WMSTileLayer {...preferencias.layers} />
      <EventoClick />
    </MapContainer>
  );
};

export default Map;
