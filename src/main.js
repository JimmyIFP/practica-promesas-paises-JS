'use strict'

import { regiones } from "../public/data/info.js";
// Imports
import { getPais } from "./services/getPaisService.js";
import { getRegiones } from "./services/getRegionService.js";

// Selectors
const btnFindCountry = document.getElementById('buscar-pais');
const btnFindRegion = document.getElementById('buscar-region');
const inputCountry = document.getElementById('id-pais');
const countryNameOutput = document.getElementById('nombre-pais');
const regionsNameOutput = document.getElementById('listado-regiones');

// Global
let paisId;
let isCountryFound = false;

// Get country id
const getIdFromInput = () => {
  console.log("---------------------------------------");
  console.log("Llamando a getIdFromInput()");
  paisId = parseInt(inputCountry.value);
  if (isNaN(paisId)) {
    console.log('\tEl valor ingresado no es un número válido.');
    return;
  }
  console.log("\tValor del input: " + paisId);
  console.log("---------------------------------------");
}

// Events
btnFindCountry.addEventListener('click', () => {
  console.log("---------------------------------------");
  console.log("Llamada al listener del boton buscar pais");
  getIdFromInput();
  
  try {
    findPais(paisId);
    console.log("\tLlamando a findPais(id) dentro del listener");
  } catch (error) {
    console.error(error.message);
  }
  console.log("---------------------------------------");

});

btnFindRegion.addEventListener('click', () => {
  if (isNaN(paisId)) return;

  try {
    findRegions(paisId);
  } catch (error) {
    console.error(error.message);
  }
});


const findPais = async (id) => {
  console.log("---------------------------------------");
  console.log("Llamando a findPais(id)");
  try {
    const pais = await getPais(id);
    console.log("\tPaís encontrado: " + pais);
    countryNameOutput.textContent = pais;
    isCountryFound = true;
    btnFindRegion.disabled = false;
  } catch (error) {
    console.error(error.message);
    console.error("País no encontrado");
    countryNameOutput.textContent = 'País no encontrado';
    btnFindRegion.disabled = true;
  }
  regionsNameOutput.innerHTML = '';
  console.log("\tReseteado el listado de regiones")
  console.log("---------------------------------------");
};

const findRegions = async (id) => {
  console.log("---------------------------------------");
  console.log("Llamando a findRegions(id)");
  try {
    const regiones = await getRegiones(id);
    console.log("\tRegiones encontradas: " + regiones);
    if (regiones.length === 0) throw new Error("No se encontraron regiones para el país con id " + id);
    regiones.forEach(r => {
      let li = document.createElement('li');
      li.textContent = r;
      regionsNameOutput.appendChild(li);
    });
    console.log("\tRegiones agregadas al listado")
  } catch (error) {
    console.log(error);
    console.error("\tRegiones no encontradas");
    regionsNameOutput.textContent = 'Regiones no encontradas';
  }
  console.log("---------------------------------------");
};