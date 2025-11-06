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
    findPais(paisId);
  } catch (error) {
    console.log(error.message);
  }

});

btnFindRegion.addEventListener('click', () => {
  if (isNaN(paisId)) return;

  try {
    findRegions(paisId);
  } catch (error) {
    console.log(error.message);
  }
});


const findPais = async (id) => {
  console.log("---------------------------------------");
  console.log("Llamando a findPais(id)");
  console.log("---------------------------------------");
  try {
    const pais = await getPais(id);
    countryNameOutput.textContent = pais;
    isCountryFound = true;
    btnFindRegion.disabled = false;
  } catch (error) {
    console.log(error);
    countryNameOutput.textContent = 'País no encontrado';
    btnFindRegion.disabled = true;
  }
  regionsNameOutput.innerHTML = '';
};

const findRegions = async (id) => {
  console.log("---------------------------------------");
  console.log("Llamando a findRegions(id)");
  console.log("---------------------------------------");
  try {
    const regiones = await getRegiones(id);
    if (regiones.length === 0) throw new Error("No se encontraron regiones para el país con id " + id);
    regiones.forEach(r => {
      let li = document.createElement('li');
      li.textContent = r;
      regionsNameOutput.appendChild(li);
    });
  } catch (error) {
    console.log(error);
    regionsNameOutput.textContent = 'Regiones no encontradas';
  }
};