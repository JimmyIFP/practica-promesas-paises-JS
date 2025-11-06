'use strict'

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
  }

});

btnFindRegion.addEventListener('click', () => {
  if (isNaN(paisId)) return;

  try {
    findRegions(paisId);
  } catch (error) {
  }
});
