// const horas = document.getElementById('horas');
// const minutos = document.getElementById('minutos');
// const segundos = document.getElementById('segundos');

// const relogio = setInterval(function time(){
//     let dateToday = new Date();
//     let hr = dateToday.getHours();
//     let min = dateToday.getMinutes();
//     let sec = dateToday.getSeconds();

//     if(hr<10) hr = '0' + hr;
//     if(min<10) min = '0' + min;
//     if(sec<10) sec = '0' + sec;
    
//     horas.textContent = hr;
//     minutos.textContent = min;
//     segundos.textContent = sec;
// })

function alterarBackground() {
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >= 7 && hora < 12) {
        // Manhã (7h - 12h)
        document.body.style.backgroundColor = "rgb(255, 223, 186)"; // Exemplo: cor clara para o dia
    } else if (hora >= 12 && hora < 18) {
        // Tarde (12h - 18h)
        document.body.style.backgroundColor = "rgb(255, 183, 77)"; // Exemplo: cor mais quente para a tarde
    } else {
        // Noite (18h - 7h)
        document.body.style.backgroundColor = "rgb(34, 34, 51)"; // Exemplo: cor escura para a noite
    }
}

// Executa a função ao carregar a página
alterarBackground();

// Atualiza a cor do fundo a cada hora
setInterval(alterarBackground, 3600000); // 3600000 ms = 1 hora

// Relógio digital
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
}, 1000); // Atualiza a cada segundo