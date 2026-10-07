const imagenes = [
    "https://content.elmueble.com/medio/2023/12/19/pez-dorado_c0bb19e3_231219190246_900x900.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SyulkJJoJqt1DjNnUyzp5sio5v3wmQJlmfrK_1L-IIljPiSb4_-3yEk&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV7Z33XVD9P0Su-BC9r56vDrecN9RWEJbDlFTdxWVQkPc5eMc66Hgisdy&s=10"
];

let indice = 0;
const imagen = document.querySelector ( ".card-img-top");
const boton = document.querySelector ( ".btn.btn-outline-dark");

boton.addEventListener("click", () => {indice = (indice + 1)% imagenes.length;
    imagen.src = imagenes[indice];
})
