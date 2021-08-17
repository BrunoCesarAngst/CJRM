// conversão de tipos
let score = '100'

// concatenação entre uma string e um número resulta em uma string
// console.log(score + 1) // 1001

// para converter e reatribuir o tipo dessa variável, chamamos uma função construtora passando a variável contendo a string como argumento para essa função
score = Number(score)

console.log(score + 1) // 101
// verificando o tipo da variável
console.log(typeof score) // number

const crazyConversion = Number('Maçã')
const convertedNumber = String(97)
const booleanConversion = Boolean(10)

console.log(crazyConversion) // NaN uma conversão que não faz sentido para o JS
console.log(convertedNumber + ' é um valor ' + typeof convertedNumber) // 97 é um valor string
console.log(booleanConversion + ' é um valor ' + typeof booleanConversion) // true é um valor boolean

/*
  Values falsy:
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - NaN
  Values truthy:
    - Any value that isn't falsy.
*/

console.log(Boolean(0))

