// Crear el archivo app.js que debe importar la exportación por defecto de multiplicacionDivision.js e importar las exportaciones nombradas de los otros 2 archivos.

import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

// Luego debe ejecutar las 4 operaciones y mostrar resultados. Si dividir lanza un error, captúralo en un try/catch y muestra Error en división: “mensaje”.
console.log("+-----------------------------+\nEjercicio 7 (9.)\n\"Sistema modular\"");

console.log(multiplicar(2, 3));
try {
    console.log(dividir(21, 0));
} catch (error) {
    console.error("Error en divisón:", error.message);
}
console.log(sumar(5, 1));
console.log(restar(1, 1));