import { regiones } from "../../public/data/info.js";

export const getRegiones = async (paisId) => {
  console.log("---------------------------------------");
  console.log("Llamando a getRegiones(id)");
  console.log("---------------------------------------");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const regionesArray = regiones.filter(r => r.paisId === paisId);
      const regionNames = regionesArray.map(r => r.nombre);
      if (regionNames) {
        resolve(regionNames);
      } else {
        reject("Error al obtener el regiones del pais con id " + paisId);
      }
    }, 1000);
  });
}