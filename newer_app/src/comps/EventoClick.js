import { useMapEvents } from "react-leaflet";

const EventoClick = () => {
  useMapEvents({
    click: (e) => {
      console.log(JSON.stringify(e.latlng));
    },
  });
  return null;
};

export default EventoClick;
