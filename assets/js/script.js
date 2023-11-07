const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hora < 10){
        hora = '0' + hora;
    }

    if(minuto < 10){
        minuto = '0' + minuto;
    }

    if(seg < 10){
        seg = '0' + seg;
    }

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = seg;
})