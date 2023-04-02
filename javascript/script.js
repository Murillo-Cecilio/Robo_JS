const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braço = document.querySelector('#braço')
//erro na linha 5 foi justamente por não usar SelectorAll para utilizar array tem que ter multiplos comandos dentro dele
const controle = document.querySelectorAll('.controle-ajuste')
//linha 7 array formado para somar e subtrair todos os status
controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent)
    })
});


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

function manipulaDados(operação) {
    if (operação === "-") {
        braço.value = parseInt(braço.value) - 1
    } else {
        braço.value = parseInt(braço.value) + 1
    }
}