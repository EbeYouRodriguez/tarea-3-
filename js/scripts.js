const imagenes = [
    "https://content.elmueble.com/medio/2023/12/19/pez-dorado_c0bb19e3_231219190246_900x900.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SyulkJJoJqt1DjNnUyzp5sio5v3wmQJlmfrK_1L-IIljPiSb4_-3yEk&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV7Z33XVD9P0Su-BC9r56vDrecN9RWEJbDlFTdxWVQkPc5eMc66Hgisdy&s=10"
];

let indice = 0;

// Selecciona de forma más precisa la imagen principal del producto de Bootstrap
const imagen = document.querySelector(".card img") || document.querySelector("img.card-img-top") || document.querySelector(".col-md-6 img");
// Selecciona el botón que contiene el texto "ver mas"
const boton = document.querySelector(".btn-outline-dark");

if (boton && imagen) {
    boton.addEventListener("click", (e) => {
        // Evita que el botón recargue la página si es un enlace o un submit
        e.preventDefault(); 
        
        // Cambia al siguiente índice de forma circular
        indice = (indice + 1) % imagenes.length;
        
        // Asigna la nueva URL de la imagen
        imagen.src = imagenes[indice];
    });
} else {
    console.error("No se encontró el botón o la imagen en el HTML. Verifica sus clases.");
}