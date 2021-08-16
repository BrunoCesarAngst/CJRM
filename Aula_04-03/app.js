// Comparações com igualdade estrita - Aula 04-03

// exemplo
const age = 31

// 'igual a' e 'diferente de'
// console.log(age == 31) // true
// console.log(age == '31') // true
// console.log(age != 31) // false
// console.log(age != '31') // false
// aqui com duplo sinal de igualdade, está acontecendo conversão de tipos
// convertendo o que esta a direita do duplo sinal de igualdade em um number

// 'igual a, e do mesmo tipo, ===' e 'diferente de, e do mesmo tipo, !=='
// isso é Strict equality e Nonidentity operator
// console.log(age === 31) //true
// console.log(age === '31') // fase
console.log(age !== 31) // false
console.log(age !== '31') // true
