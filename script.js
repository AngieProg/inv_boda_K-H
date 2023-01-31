const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

//Fecha a futuro
const countdownDate = new Date('aug 5, 2023 14:30:00').getTime();
let interval = setInterval(function(){
    //obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //obtener diferencia de ambas fechas
    let distance = countdownDate - now; 

    //Calculo a días, horas, minutos y segundo
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60))/(1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
    console.log(days);

    //Cuanda countdown llegue a cero
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateX(0)';
        console.log("Entro");
    }
},1000);

// AUTOREPRODUCTOR DE MÚSICA

const audio = document.getElementById("audio1");
const play = document.getElementById("play");

// function PlayAudio() { 
//     audio.play();
// }
//Escuchar clicks en el botón play
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    }else{
        pauseSong();
    }
})

//Reproducir canción
function playSong() {
     audio.play();
}

//Pausar canción
function pauseSong() {
    audio.pause();
}

function updateControls() {
    if(audio.pause){
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }else{
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
    }
}


