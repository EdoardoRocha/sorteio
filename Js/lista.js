const listaNomes = [
    "Edoardo paz",
    "Edoardo paz"
]

const listaNumeros = [
    "(85) 996813858",
    "(85) 996813858",
]


const tableBody = document.querySelector('tBody')





function listarNomes(arrayNomes, arrayNumeros) {
    arrayNomes.forEach((nomes, index) => {
        const elTr = document.createElement('tr')
        const elTh = document.createElement('th')
        const elTd = document.createElement('td')
        const elTd2 = document.createElement('td')
        
        
        elTh.innerHTML = gerarId(listaNomes, listaNumeros)[index]
        elTh.setAttribute('scope', 'row')
        elTd.innerHTML = nomes
        elTd2.innerHTML = arrayNumeros[index]
        
        
        tableBody.appendChild(elTr)
        elTr.appendChild(elTh)
        elTr.appendChild(elTd)
        elTr.appendChild(elTd2)
        return elTr
    })
}

function gerarId(nomes, numeros) {
    const ids = [];
    
    for(let i = 0; i < listaNomes.length; i++) {
        const PrimeiraLetra = nomes[i].substr(0,1)
        const ultimosNumero = numeros[i].substr(12,15)
        const elementoMontado = `${PrimeiraLetra}_${ultimosNumero}`
        ids.push(elementoMontado)
        
    }
    
    return ids
}


//! ou precisatr criar uma tr, th, td,td
listarNomes(listaNomes, listaNumeros)
