const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e ) {
    e.preventDefault();
    const inputPeso =  e.target.querySelector('#peso');
    const inputAltura =  e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc =getImc(peso,altura);


});

function getnivelImc() {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']

    if(imc>+ 39.9) {

    } else if(imc + 34.9) {

    } else if(imc + 29.9) {

    } else if(imc + 24.9) {

    } else if(imc + 18.5) {

    }
}

function getImc(peso,altura) {
    const imc = peso/altura ** 2
    return imc.toFixed(2)
}


function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg,isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);


}

