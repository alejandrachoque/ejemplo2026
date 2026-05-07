//array con url de imagenes
const imagenes=['img/gato1.jpg','img/gato2.jpg','img/gato3.jpg'];

//capturar elementos del DOM
const btn= document.getElementById('btn');
const contenedor= document.getElementById('imagenes');
//evento click
btn.addEventListener('click',()=>{
    //evitar duplicados
  /*  if(contenedor.children.length>0) return;
    //recorrer el array
    imagenes.forEach(ruta=>{
        const img= document.createElement('img');
        img.src=ruta;
        contenedor.appendChild(img);
    })*/

    if (contenedor.children.length > 0) {
        contenedor.innerHTML = "";
        btn.textContent = "Ver imágenes de gatos";
        return;
    }
    imagenes.forEach(ruta => {
        const img = document.createElement("img");
        img.src = ruta;
        contenedor.appendChild(img);
    });

    btn.textContent = "Ocultar imágenes";
})