// Crear el archivo multiplicacionDivision.js que debe contener una exportación por defecto multiplicar y una exportación nombrada dividir para 2 números.

export default function multiplicar(a, b) { return a * b; }

export function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}