const imagenes = [
   "https://upload.wikimedia.org/wikipedia/commons/6/6d/Mantis_shrimp.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
   "https://imagenes2.eltiempo.com/files/image_600_700/files/fp/uploads/2024/11/06/672bbe5d7f642.r_d.476-238-19028.png",
    "https://scubadventure.cl/wp-content/uploads/2025/03/g2.jpg"
];

let indice = 0;

document.addEventListener("DOMContentLoaded", () => {

    const imagen = document.getElementById("imagen-peces");
    const boton = document.getElementById("boton-cambiar");

    if (boton && imagen) {
        boton.addEventListener("click", (e) => {
            e.preventDefault();

  
            indice = (indice + 1) % imagenes.length;

          
            imagen.src = imagenes[indice];
        });
    } else {
        console.error("No se encontró el botón o la imagen. Verifica los IDs: imagen-peces y boton-cambiar");
    }
});

function cambiarTitulo() {
  let titulo = document.getElementById("titulo");
  titulo.textContent = "pes globo ";
  titulo.style.color = "red";
}

function convertirDolares() {
    let dolares = Number(prompt("Ingresa la cantidad en dólares:"));
    let tasa = Number(prompt("Ingresa la tasa de cambio a moneda local:"));
    
    let resultado = dolares * tasa;
    alert("El equivalente es: " + resultado.toFixed(2));
}

function calcularTerreno() {
    let largo = Number(prompt("Ingresa el largo del terreno:"));
    let ancho = Number(prompt("Ingresa el ancho del terreno:"));
    
    let area = largo * ancho;
    let perimetro = 2 * (largo + ancho);
    
    alert("Área: " + area + "\nPerímetro: " + perimetro);
}
