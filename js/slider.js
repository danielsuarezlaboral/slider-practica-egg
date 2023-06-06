/////////////////////////////slider///////////////////////////////////////////
const images=[
    "./img/galeria-img001.jpg",
    "./img/galeria-img002.jpg",
    "./img/galeria-img003.jpg",
    "./img/galeria-img004.jpg",
];

document.Imagen.src = images[0];

let anterior=document.getElementById("anterior");
let siguiente=document.getElementById("siguiente");


let contador = 0;

anterior.addEventListener("click",()=>{
    contador--;
    if(contador < 0){
        contador = images.length - 1;
    }
    document.Imagen.src = images[contador];
});


siguiente.addEventListener("click",()=>{
    contador++;
    if(contador > images.length - 1){
        contador = 0;
    }
    document.Imagen.src = images[contador];
});
//////////////////////////////slider///////////////////////////////////////////


//////////////////////    interruptor    ////////////////////////////////////
let imageSlider = document.querySelector(".image-slider")
let galleryContainer = document.querySelector(".gallery-container")
let interruptor = document.querySelector("button.interruptor").innerHTML

document.querySelector("button.interruptor")
.addEventListener("click",()=>{
    galleryContainer.classList.toggle("oculto");
    imageSlider.classList.toggle("oculto");
    
        if(interruptor == 'Ver galeria'){
            interruptor = document.querySelector("button.interruptor").innerHTML = 'Ver slide';
        }else{
            interruptor = document.querySelector("button.interruptor").innerHTML = 'Ver galeria';
        }
    });

// luciana.b.hamade@gmail.com