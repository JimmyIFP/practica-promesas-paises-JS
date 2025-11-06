import { paises } from "../../public/data/info.js";

export const getPais = async (id) => {
  console.log("---------------------------------------");
  console.log("Llamando a getPais(id)");
  console.log("---------------------------------------");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pais = paises.find(p => p.id === id)?.nombre;
      if (pais) {
        resolve(pais);
      } else {
        reject("Error al obtener el país con id " + id);
      }
    }, 1000);
  });
}