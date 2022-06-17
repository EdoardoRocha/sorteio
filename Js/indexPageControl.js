const btnIniciar = document.querySelector('.btnInit')
const contInit = document.querySelector('.sorteioNaoIniciado')
const titleInit = document.querySelector('#title')
const descInit = document.querySelector('#desc')
const btnVoltar = document.querySelector('.btnVoltar')

const arrayAtbr = [
    titleInit.getAttribute('content'),
    descInit.getAttribute('content'),
]

function verificarSorteio() {
    if(localStorage.getItem("nomesSorteio") == null) {
        titleInit.innerHTML = "404 not Found"
        descInit.innerHTML = "Desculpe nenhuma lista para sorteio encontrada, Por favor cadastre uma"
        btnVoltar.classList = 'aparece btnInit'
        btnIniciar.classList = 'esconde'
        return
    }
}

btnVoltar.addEventListener('click', voltarTudo = () => {
    btnIniciar.classList = 'aparece btnInit'
    titleInit.innerHTML = arrayAtbr[0]
    descInit.innerHTML = arrayAtbr[1]
    btnVoltar.classList = 'esconde'
})

btnIniciar.addEventListener('click', verificarSorteio)