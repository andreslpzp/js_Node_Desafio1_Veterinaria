const { registrar, leer } = require('./operaciones'); // Importamos las funciones de operaciones.js
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2); // Extraemos argumentos

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
    leer();
} else {
    console.log("Operación no válida. Usa 'registrar' o 'leer'.");
}
