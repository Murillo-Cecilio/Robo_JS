const subtrair = document.querySelector('#subtrair')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const somar = document.querySelector('#somar')
//erro na linha foi justamente por não usar SelectorAll para utilizar array tem que ter multiplos comandos dentro dele
const controle = document.querySelectorAll('[data-controle]')//dentro do [] é data attribute
//linha para controlar os objetos da estatistica
const estatisticas = document.querySelectorAll('[data-estatistica]')
console.log(estatisticas)
//linha array formado para somar e subtrair todos os status
controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
});

function manipulaDados(operação, controle) {
    const peca = controle.querySelector('[data-contador]')

    if (operação === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}



// const robotron = document.querySelector('#robotron')

// // Funções anônima, só vai funcionar quando o evento do click for disparado,
// se utilizar () => tbm funciona como arrow function
// obotron.addEventListener('click', (evento) => {
//     console.log(evento)
// })
// function dizOi(nome) {//função nomeada(declaração de uma função)
//     console.log("oi" + nome)
//     console.log('Bem vindo ao Robo 2023')
// }


// somar.addEventListener('click', () => { manipulaDados('somar') })//deixando o código reaproveitado para demais comandos da página

// subtrair.addEventListener('click', () => { manipulaDados('subtrair') })
