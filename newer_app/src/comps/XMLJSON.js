import axios from "axios";
import { useState } from "react";

const Coso = () => {
  const [data, setData] = useState(null);

  const alacila = async (e) => {
    const wmsUrl = "https://wms.ign.gob.ar/geoserver/ows";

    const params = {
      service: "wms",
      version: "1.3.0",
      request: "GetCapabilities",
    };

    try {
      const res = await axios.get(wmsUrl, { params });
      setData(res.data);
    } catch (error) {
      console.error("se pudrio la batata ", error);
    }
    return null;
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "blue", color: "red" }} onClick={alacila}>
        esto se apreta
      </h1>
      {data && <pre>{data}</pre>}
    </div>
  );
};

export default Coso;
