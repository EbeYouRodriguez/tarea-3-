const imagenes = [
    "https://content.elmueble.com/medio/2023/12/19/pez-dorado_c0bb19e3_231219190246_900x900.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SyulkJJoJqt1DjNnUyzp5sio5v3wmQJlmfrK_1L-IIljPiSb4_-3yEk&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV7Z33XVD9P0Su-BC9r56vDrecN9RWEJbDlFTdxWVQkPc5eMc66Hgisdy&s=10"
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