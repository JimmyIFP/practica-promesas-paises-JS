# Actividad

## Practicar Promesas en JavaScript simulando llamadas a una API/BD

* Crear Promesas con latencia simulada.
* Consumirlas con `async/await` y con `.then()/.catch()`.
* Ejecutar Promesas en paralelo con `Promise.all`.

## Requisitos y Setup del repositorio

Crea un repositorio público llamado: `practica-promesas-paises`
Crea ramas para cada ejercicio:

* `feature/ejercicio-uno-promesa-async`
* `feature/ejercicio-dos-promesa-then`
* `feature/ejercicio-tres-paralelo`

Estructura del proyecto (cambia el nombre de los servicios por `getPaisService`, `getRegionService`):

## Práctica: : “Consultas asíncronas con Promesas — Países y Regiones”

### Ejercicio 1 — `async/await` + `try/catch` en `main.js`

Rama: `feature/ejercicio-uno-promesa-async`

Crea una función `mostrarPaisAsync(id)` en `src/main.js` que:

* Llama a `await getPais(id)`.
* Muestra el resultado o el error en consola (y/o en el DOM).
* Usa `try/catch` para capturar el rechazo de la promesa.

Criterios de aceptación

* Usa `async/await` correctamente.
* Captura errores con `try/catch`.
* Respeta la latencia simulada (no bloquea nada).

### Ejercicio 2 — `.then()` y `.catch()` en `main.js`

Rama: `feature/ejercicio-dos-promesa-then`

Implementa `mostrarPaisThen(id)` que:

* Llama a `getPais(id).then(...).catch(...)`.
* Maneja los errores en `.catch()`.

Criterios de aceptación

* Uso de `.then()` y `.catch()` correcto.

### Ejercicio 3 — Promesas en paralelo con `Promise.all`

Rama: `feature/ejercicio-tres-paralelo`

Crea una función `mostrarPaisYRegion(id)` en `src/main.js` que:

* Añade el servicio `getRegionService`
* Llama a `Promise.all([getPais(id), getRegion(id)])`
* Muestra el resultado o el error en consola (y/o en el DOM).
* Captura errores en catch

Criterios de aceptación

* Uso de `Promise.all` con dos promesas reales en paralelo.
* Manejo de éxito y error.
* Demostración en consola/DOM.

## Entregables

3 PRs separados (uno por rama/ejercicio) hacia main:

* PR 1: `feature/ejercicio-uno-promesa-async`
* PR 2: `feature/ejercicio-dos-promesa-then`
* PR 3: `feature/ejercicio-tres-paralelo`

Manual con capturas de pantalla de la consola con cada uno de los ejercicios, en el fichero html define una etiqueta

`<h1>Trabajando con promesas + NombreAlumno</h1>`

[Manual con capturas de logs](./MANUAL.md)
