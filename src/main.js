'use strict'

// Imports
import { getPais } from "./services/getPaisService.js";
import { getRegiones } from "./services/getRegionService.js";

// Selectors
const btnFindCountry = document.getElementById('buscar-pais');
const inputCountry = document.getElementById('id-pais');
const countryNameOutput = document.getElementById('nombre-pais');
const regionsNameOutput = document.getElementById('listado-regiones');

// Global
let paisId;
let isCountryFound = false;

// Get country id
const getIdFromInput = () => {
  paisId = parseInt(inputCountry.value);
  if (isNaN(paisId)) {
    console.log('El valor ingresado no es un número válido.')
    return;
  }
  console.log("---------------------------------------");
  console.log("Valor del input: " + paisId);
  console.log("---------------------------------------");
}

// Events
btnFindCountry.addEventListener('click', () => {
  console.log("---------------------------------------");
  console.log("Llamada al listener del boton buscar pais");
  console.log("---------------------------------------");
  getIdFromInput();

  try {
    findAll(paisId);
  } catch (error) {
    console.error(error.message);
  }

});

const findAll = (id) => {
  console.log("---------------------------------------");
  console.log("Llamando a findAll(id)");

  Promise.all([getPais(id), getRegiones(id)])
  .then(results => {
    const pais = results[0];
    console.log("\tPaís encontrado: " + pais);
    const regiones = results[1];
    console.log("\tRegiones encontradas: " + regiones);
    countryNameOutput.textContent = pais;
    regiones.forEach(region => {
      const li = document.createElement('li');
      li.textContent = region;
      regionsNameOutput.appendChild(li);
    });
    console.log("\tRegiones agregadas")
  })
  .catch(error => {
    console.log(error);
      countryNameOutput.textContent = 'País no encontrado';
      regionsNameOutput.innerHTML = 'Regiones no encontradas';
      console.log("\tPaís y Regiones no encontrados")
    });
  console.log("---------------------------------------");
};