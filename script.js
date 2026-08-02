const fechaInicio = new Date("2026-04-24T20:10:00");

function actualizarContador(){

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);

    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);

const boton = document.getElementById("musica");
const audio = document.getElementById("audio");

boton.addEventListener("click",()=>{

    if(audio.paused){

        audio.play();
        boton.textContent="⏸️ Pausar música";

    }else{

        audio.pause();
        boton.textContent="❤️ Reproducir nuestra canción";

    }

});
