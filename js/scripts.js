const imagenes = [
   "https://upload.wikimedia.org/wikipedia/commons/6/6d/Mantis_shrimp.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
   "https://imagenes2.eltiempo.com/files/image_600_700/files/fp/uploads/2024/11/06/672bbe5d7f642.r_d.476-238-19028.png",
    "https://scubadventure.cl/wp-content/uploads/2025/03/g2.jpg"
];

let indice = 0;

document.addEventListener("DOMContentLoaded", () => {

    // ===== 1. Convertir dólares =====
    const botonDolares = document.getElementById("boton-dolares");
    if (botonDolares) {
        botonDolares.addEventListener("click", () => {
            let dolares = Number(prompt("Ingresa la cantidad en dólares:"));
            let tasa = Number(prompt("Ingresa la tasa de cambio a moneda local:"));
            let resultado = dolares * tasa;
            alert("El equivalente es: " + resultado.toFixed(2));
        });
    }

    // ===== 2. Calcular terreno =====
    const botonTerreno = document.getElementById("boton-terreno");
    if (botonTerreno) {
        botonTerreno.addEventListener("click", () => {
            let largo = Number(prompt("Ingresa el largo del terreno:"));
            let ancho = Number(prompt("Ingresa el ancho del terreno:"));
            let area = largo * ancho;
            let perimetro = 2 * (largo + ancho);
            alert("Área: " + area + "\nPerímetro: " + perimetro);
        });
    }

    // ===== 3. Cambiar imagen =====
    const imagen = document.getElementById("imagen-peces");
    const botonImagen = document.getElementById("boton-cambiar");
    if (botonImagen && imagen) {
        botonImagen.addEventListener("click", (e) => {
            e.preventDefault();
            indice = (indice + 1) % imagenes.length;
            imagen.src = imagenes[indice];
        });
    }

    // ===== 4. Cambiar texto =====
    const botonTexto = document.getElementById("boton-texto");
    const titulo = document.querySelector("h1.display-5");
    const parrafo = document.querySelector("p.lead");
    if (botonTexto && titulo && parrafo) {
        botonTexto.addEventListener("click", () => {
            titulo.textContent = "LOS PECES TROPICALES";
            parrafo.textContent = "Los peces tropicales de agua dulce son ideales para principiantes. Son coloridos, resistentes y fáciles de cuidar en un acuario bien equipado.";
        });
    }
});