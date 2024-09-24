function playSonido(idSonido) {
  document.querySelector(idSonido).play();
}

const listaLetra = document.querySelectorAll(".tecla");

for (let i = 0; i < listaLetra.length; i++) {
  const letra = listaLetra[i];
  const indice = letra.classList[1];

  const idAudio = `#sonido_${indice}`;

  letra.onclick = function () {
    playSonido(idAudio);
  };

  letra.onkeydown = function(evento){
    console.log(evento);
    if(evento.code === "Space" || evento.code === "Enter"){
      letra.classList.add("activa");

    }
    
  }
  
  letra.onkeyup = function(){
    letra.classList.remove("activa")
  }

 
}
