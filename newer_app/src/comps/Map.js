import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import preferencias from "../settings/preferences.json";
import data from "../settings/data.json";
import EventoClick from "./EventoClick";

// esto va a ser el sistema de coordenadas, a.k.a: contenedor de mapas, a.k.a: L.map

const Map = () => {
  return (
    <MapContainer {...preferencias.preferences}>
      <TileLayer {...data.basemap[2]} />
      {/* datos obtenidos de https://wms.ign.gob.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities */}
      <WMSTileLayer {...data.layers} />
      <EventoClick />
    </MapContainer>
  );
};

export default Map;
