const listaNomes = [
    "Edoardo paz",
    "Edoardo paz"
]
const num = Math.floor(Math.random() * listaNomes.length )
const nomeSorteado = listaNomes[num]

const elCount = document.querySelector('.contador-regressivo');
let valueCount = elCount.getAttribute('sort-value');
const btnSort = document.querySelector('.btn-sort');
const elSorteado = document.querySelector('.resultado')
const sorteado = document.querySelector('#ganhador-sorteio');
const elListagem = document.querySelector('.btn-lista')

function startContador() {
    btnSort.classList = 'esconde'
    elCount.classList = 'aparece contador-regressivo'
    elListagem.classList = 'esconde'
    contador()
}
btnSort.addEventListener('click', startContador)


function contador()  {
     setInterval(() => {
        if(valueCount == 0 || valueCount < 0) {
            pararContador()
        } else {
            let count = --valueCount
            elCount.innerHTML = count
            return elCount
        }
    }, 1000)
}


function pararContador() {
    clearInterval()
    elCount.classList = 'esconde'
    exibirGanhador()
}

function exibirGanhador() {
    elSorteado.classList = 'resultado aparece'
    sorteado.innerHTML = nomeSorteado
}

