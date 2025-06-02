// variables
const bloque = document.getElementById('bloque');
const boton = document.querySelector('button');
const body = document.querySelector('body')

// eventos
bloque.addEventListener('mouseover', ()=>{
    fondoBody();
    
});

bloque.addEventListener('mouseout' , ()=>{
     quitarFondo();
})

boton.addEventListener('click' , ()=>{
    audio('audio/botonCompra.mp3');
})


// funciones
function fondoBody(){
    body.classList.add('cuerpo');

}

function quitarFondo(){
    body.classList.remove('cuerpo');
    
}

function audio(url){
    const audio = new Audio(url);
    audio.play();
}