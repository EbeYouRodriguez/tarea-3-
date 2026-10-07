const imagenes = [
   "https://upload.wikimedia.org/wikipedia/commons/6/6d/Mantis_shrimp.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
   "https://imagenes2.eltiempo.com/files/image_600_700/files/fp/uploads/2024/11/06/672bbe5d7f642.r_d.476-238-19028.png",
    "https://scubadventure.cl/wp-content/uploads/2025/03/g2.jpg"
];

let indice = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Usa los IDs que ya tienes en el HTML (más seguros)
    const imagen = document.getElementById("imagen-peces");
    const boton = document.getElementById("boton-cambiar");

    if (boton && imagen) {
        boton.addEventListener("click", (e) => {
            e.preventDefault();

            // Cambia al siguiente índice de forma circular
            indice = (indice + 1) % imagenes.length;

            // Cambia la imagen
            imagen.src = imagenes[indice];
        });
    } else {
        console.error("No se encontró el botón o la imagen. Verifica los IDs: imagen-peces y boton-cambiar");
    }
});
function cambiarTitulo() {
  let titulo = document.getElementById("titulo");
  titulo.textContent = "Ejemplos JS";
  titulo.style.color = "red";