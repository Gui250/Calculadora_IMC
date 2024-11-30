var inputPeso = document.querySelector('#peso');
var inputAltura = document.querySelector('#altura');
var modal = document.querySelector('.modal');
var btn = document.querySelector('.btn');
var btnResetar = document.querySelector('.resetar');
function calcularImc() {
    if (inputPeso && inputAltura) {
        var valorPeso = parseInt(inputPeso.value);
        var valorAltura = parseFloat(inputAltura.value);
        var imc = valorPeso / (Math.pow(valorAltura, 2));
        if (modal) {
            var paragrafo = document.createElement('p');
            modal.appendChild(paragrafo);
            paragrafo.style.fontSize = '3rem';
            paragrafo.style.fontFamily = 'Roboto';
            paragrafo.innerHTML += "O valor do seu IMC \u00E9 de ".concat(imc.toFixed(2));
        }
    }
}
if (btnResetar) {
    if (modal) {
        modal.style.display = 'none';
    }
}
if (btn) {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        calcularImc();
        console.log('Cliquei no botão!!');
    });
}
