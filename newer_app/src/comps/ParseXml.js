import axios from "axios";
import { useState } from "react";

const ParseXml = () => {
  const [layers, setLayers] = useState([]);

  // const alacila = async (e) => {
  //   const wmsUrl = "https://wms.ign.gob.ar/geoserver/ows";

  const params = {
    service: "wms",
    version: "1.3.0",
    request: "GetCapabilities",
  };

  //   try {
  //     const res = await axios.get(wmsUrl, { params });
  //     setXmlStr(res.data);
  //   } catch (error) {
  //     console.error("se pudrio la torta ", error);
  //   }
  //   return null;
  // };

  const dameLaData = async (url, params) => {
    try {
      const respuesta = await axios.get(url, { params });
      const stringicito = respuesta.data;
      // console.log('en dameladata: \n' +stringicito);
      return stringicito;
    } catch (error) {
      console.error("se pudrio la batata ", error);
    }
    return true;
  };
  const traducimeLaData = (xmlDireccion) => {
    const parser = new DOMParser();
    const documento = parser.parseFromString(xmlDireccion, "application/xml");
    console.log('en traducimeladata: \n' + documento);
    console.log(xmlDireccion);
    if (documento.getElementsByTagName("parsererror").length) {
      throw new Error("Error parsing XML");
    }
    return documento;
  };

  const extraemeLaData = (xmlDoc) => {
    const layers = [];
    const layerElements = xmlDoc.getElementsByTagName("Layer");
  
    console.log("Found Layer Elements:", layerElements.length); // Log the number of Layer elements found
  
    for (let i = 0; i < layerElements.length; i++) {
      const layerElement = layerElements[i];
      const nameElement = layerElement.getElementsByTagName("Name")[0];
      const titleElement = layerElement.getElementsByTagName("Title")[0];
  
      console.log(`Processing Layer ${i}:`, layerElement); // Log each layer element
  
      if (nameElement && titleElement) {
        layers.push({
          name: nameElement.textContent,
          title: titleElement.textContent,
        });
      } else {
        console.warn(`Layer ${i} is missing Name or Title element`);
      }
    }
  
    console.log("Extracted Layers:", layers); // Log the extracted layers
  
    return layers;
  };
  // const extraemeLaData = (xmlDocumento) => {
  //   const layers = [];
  //   const elementos = xmlDocumento.getElementsByTagName("Layer");

  //   for (let i = 0; i < elementos.length; i++) {
  //     const elemento = elementos[i];
  //     const nombre = elemento.getAttribute("Name");

  //     if (nombre) {
  //       layers.push({
  //         nombre: nombre,
  //       });
  //     }
  //   }

  //   return layers;
  // };

  const cleik = async (e) => {
    try {
      const xmlPesquisado = await dameLaData(
        "https://wms.ign.gob.ar/geoserver/ows",
        params
      );
      const xmlTraducido = traducimeLaData(xmlPesquisado);
      const capasObtenidas = extraemeLaData(xmlTraducido);
      setLayers(capasObtenidas);
      console.log("llegue")
      console.log(JSON.stringify(layers));
    } catch (error) {
      console.error("se re pudrio la maroma ", error);
    }
    return true;
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "blue", color: "red" }} onClick={cleik}>
        esto se apreta
      </h1>
      {(layers.length >0) && <pre>{JSON.stringify(layers, null, 2)}</pre>}
    </div>
  );
};

export default ParseXml;
