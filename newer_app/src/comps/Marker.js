import React from "react";
import { Marker, Popup } from "react-leaflet";

const Mark = (props) => {
  return (
    <Marker
      position={props.position}
      style={{ color: "red", innerHeight: "10px", innerWidth: "10px" }}
    >
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default Mark;
