const fs = require('fs');

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    // Leer el archivo actual para obtener las citas existentes
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error leyendo el archivo:", err);
            return;
        }

        const citas = data ? JSON.parse(data) : []; // Convertimos el JSON en un arreglo
        citas.push(nuevaCita); // Agregamos la nueva cita

        // Guardamos el arreglo actualizado en el archivo
        fs.writeFile('citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.error("Error escribiendo en el archivo:", err);
                return;
            }
            console.log("Cita registrada con éxito.");
        });
    });
}

// Función para leer todas las citas registradas
function leer() {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error leyendo el archivo:", err);
            return;
        }

        const citas = data ? JSON.parse(data) : [];
        console.log("Citas registradas:");
        citas.forEach((cita, index) => {
            console.log(`${index + 1}. ${JSON.stringify(cita)}`);
        });
    });
}

module.exports = { registrar, leer }; // Exportamos las funciones
