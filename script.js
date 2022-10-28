const MAN = document.getElementById('mantenimiento');

const FLU = document.getElementById('flujo');

const CALCULAR = document.getElementById('calcular');

const ERROR = document.getElementById('error');

const MSG = document.getElementById('msg');


CALCULAR.addEventListener( 'click', () => {
    const PESO = document.getElementById('peso').value;//Tomamos el valor del peso
    if(PESO<1){
        ERROR.style.display = 'block';
    } else{
        CALCULAR.style.display = 'none';
        ERROR.style.display = 'none';
        let flujo = calc(PESO);
        let m = Math.round(flujo * 1.5); 
        MSG.innerHTML = 'La hidratación basal debe ser: ';
        FLU.innerHTML = 'Mantenimiento: ' + flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 : ' + m + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
});

function calc(peso) {//Funcion para calcular
    let p = peso;
    let flujo;
    if (p < 11) {
        flujo = p * 100;
    } else if (p < 21) {
        flujo = 1000 + (p - 10) * 50;
    } else {
        flujo = 1000 + 500 + (p - 20) * 20;
    }
    flujo = Math.round(flujo / 24);
    return flujo;
}