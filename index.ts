const inputPeso: HTMLInputElement | null = document.querySelector('#peso');
const inputAltura: HTMLInputElement | null = document.querySelector('#altura');
const modal: HTMLElement | null = document.querySelector('.modal');
const btn: Element | null = document.querySelector('.btn');
const btnResetar: Element | null = document.querySelector('.resetar');

function calcularImc() {
        if(inputPeso && inputAltura) {
            let valorPeso = parseInt(inputPeso.value); 
            let valorAltura = parseFloat(inputAltura.value);
            const imc = valorPeso / (valorAltura ** 2);
            if(modal) {
               const paragrafo = document.createElement('p');
               modal.appendChild(paragrafo); 
               paragrafo.style.fontSize = '3rem';
               paragrafo.style.fontFamily = 'Roboto';
               paragrafo.innerHTML += `O valor do seu IMC é de ${imc.toFixed(2)}`;
            }
        }
}

if(btnResetar) {
    if(modal) { 
        modal.style.display = 'none';
    }
}


if(btn) {
    btn.addEventListener('click', (event) => { 
        event.preventDefault();
        calcularImc();
        console.log('Cliquei no botão!!');
    })
}