// inteiros e decimais
const radius = 10;
const pi = 3.14;

console.log(radius, pi);

// operadores aritméticos
const area = pi * radius ** 2;

// ordem de operações
const crazyOperation = 5 * (10 - 3) ** 2;

console.log(crazyOperation);

console.log(area);

// 1º parenteses
// 2º expoentes e raízes
// 3º multiplicação e divisão
// 4º adição e subtração

// operadores de incremento e decremento
let postLikes = 11;

// postLikes = postLikes + 1
// postLikes++
postLikes--;

// operadores addition, subtraction, multiplication and division assignment
// postLikes = postLikes + 10
// postLikes += 10
// postLikes -= 5
// postLikes *= 3
postLikes /= 2;

console.log(postLikes);

// NaN - not a number
console.log(7 / "oi");

// concatenação de número com string
const likesMessage = "O post tem " + postLikes + " likes.";
console.log(likesMessage);

/*

// strings um encadeamento de caracteres (letras ou números)
// entre aspas simples ou duplas
console.log('hello, world')

const email = 'leon@retete.com.br'

console.log(email)

// podemos concatenar strings
const firstName = 'Bruno'
const lastName = 'César'
const fullName = firstName + ' ' + lastName

console.log(fullName)

// acessando caracteres
console.log(fullName[0])

// propriedades de strings
// comprimento de uma string length
console.log(fullName.length)

// métodos de string
// pedaços de códigos que são embutidos
// e tem uma ação específica
console.log(fullName.toUpperCase())

const result = fullName.toLowerCase()
console.log(result, fullName)

const index = email.indexOf('@') // <- dentro dos parenteses há os ARGUMENTOS

console.log(index)

*/