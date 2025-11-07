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

const findPais = (id) => {
  console.log("---------------------------------------");
  console.log("Llamando a findPais(id)");
  console.log("---------------------------------------");

  getPais(id)
    .then(empleado => {
      countryNameOutput.textContent = empleado;
      isCountryFound = true;
      btnFindRegion.disabled = false;
    })
    .catch(error => {
      console.log(error);
      countryNameOutput.textContent = 'País no encontrado';
      isCountryFound = false;
      btnFindRegion.disabled = true;
    });
    regionsNameOutput.textContent = '';
};

const findRegions = (id) => {
  console.log("---------------------------------------");
  console.log("Llamando a findRegions(id)");
  console.log("---------------------------------------");

  getRegiones(id)
    .then(regiones => {
      if (regiones.length === 0) throw new Error("No se encontraron regiones para el país con id " + id);
      regiones.forEach(region => {
        const li = document.createElement('li');
        li.textContent = region;
        regionsNameOutput.appendChild(li);
      });
    })
    .catch(error => {
      console.log(error);
      regionsNameOutput.textContent = 'Regiones no encontradas';
    });
};