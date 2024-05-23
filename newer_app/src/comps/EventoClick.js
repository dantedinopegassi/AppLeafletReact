import { useMapEvents } from "react-leaflet";

const EventoClick = () => {
  useMapEvents({
    click: (e) => {
      console.log('latlng '+JSON.stringify(e.latlng));
      console.log('containerPoint '+JSON.stringify(e.containerPoint));
      console.log('layerPoint '+JSON.stringify(e.layerPoint));
      console.log('target.getCenter() '+JSON.stringify(e.target.getCenter()));
      console.log('target.getBounds() '+JSON.stringify(e.target.getBounds()));
      console.log('type '+JSON.stringify(e.type));
      console.log('originalEvent '+JSON.stringify(e.originalEvent));
      console.log('popup '+JSON.stringify(e.popup));
    },
  });
  return null;
};

export default EventoClick;
