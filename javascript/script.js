const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braço = document.querySelector('#braço')


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

somar.addEventListener('click', (evento) => {
    braço.value = parseInt(braço.value) + 1
})

subtrair.addEventListener('click', (evento) => {
    braço.value = parseInt(braço.value) - 1
})