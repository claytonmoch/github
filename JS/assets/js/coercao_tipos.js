// Coerção de tipos

const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('12312312'))
console.log(parseFloat('12312312.123'))
console.log(parseInt('12312312.123'))
console.log(Boolean(0))

console.log(10 + '1')
console.log(10 - '1')
console.log(10 * '3')
console.log(10 - 'asd')
