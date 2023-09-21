    function tocaSom(idElementoAudio){
        document.querySelector(idElementoAudio).play();
    }
    
    const listadeteclas = document.querySelectorAll('.tecla');

    let contador = 0;

    while( contador < 9) {
        listadeteclas[contador].onclick = tocaSom;

        contador = contador + 1;

        console.log(contador);
    }
    