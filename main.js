    function tocaSom(idElementoAudio){
        document.querySelector(idElementoAudio).play();
    }
    
    const listadeteclas = document.querySelectorAll('.tecla');
    
    for(let contador = 0;   contador < listadeteclas.length; contador++) {

        const tecla = listadeteclas[contador]

        const instrumento = tecla.classList[1];

        const idAudio = `#som_${instrumento}`;

        //console.log(idAudio);

        listadeteclas[contador].onclick = function(){
            tocaSom(idAudio)
        }

        // console.log(contador);

        tecla.onkeydown = function(){
            tecla.classList.add('')
        }
    }
    