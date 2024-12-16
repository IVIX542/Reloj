const textoReloj = document.querySelector("p")

function actualizarReloj(){
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    textoReloj.textContent = horas + ":" +  minutos + ":" + segundos
}

setInterval(actualizarReloj, 1000);

actualizarReloj();