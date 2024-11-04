const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr<10) hr = '0' + hr;
    if(min<10) min = '0' + min;
    if(sec<10) sec = '0' + sec;
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})

function alterarBackground() {
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >= 7 && hora < 12) {
        document.body.style.background = "linear-gradient(45deg, #36daff, #fff24d)";
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = "linear-gradient(45deg, #FF5F6D, #FFC371)";
    } else {
        document.body.style.background = "linear-gradient(45deg, #2C3E50, #4CA1AF)";
    }
}

alterarBackground();

setInterval(alterarBackground, 3600000);

// Relógio digital
// const horas = document.getElementById('horas');
// const minutos = document.getElementById('minutos');
// const segundos = document.getElementById('segundos');

// const relogio = setInterval(function time(){
//     let dateToday = new Date();
//     let hr = dateToday.getHours();
//     let min = dateToday.getMinutes();
//     let sec = dateToday.getSeconds();

//     if(hr < 10) hr = '0' + hr;
//     if(min < 10) min = '0' + min;
//     if(sec < 10) sec = '0' + sec;

//     horas.textContent = hr;
//     minutos.textContent = min;
//     segundos.textContent = sec;
// }, 1000); // Atualiza a cada segundo