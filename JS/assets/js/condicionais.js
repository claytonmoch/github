// Estruturas Condicionais

const idade = 46;

if (idade >= 18) {
    console.log("Você é maior de idade!")
}

else {
    console.log("Você é menor de idade!")
}

console.clear()
let media = 5

if (media >=7) {
    console.log('Aprovado')
}
else if (media >=5) {
    console.log('Recuperação')
}
else {
    console.log('Reprovado')
}

console.clear()

const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number( input.question('Qual numero voce escolhe?'))

while (numero !== numero_sorteado) {
    console.log('Voce errou o numero. Tente novamente...')

    numero = Number( input.question('Qual numero voce escolhe?'))
}
console.log(('Voce acertou o numero.'))