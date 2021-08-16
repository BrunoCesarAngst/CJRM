// Booleans e comparadores
// true e false que não estão entre aspas são valores especiais são booleans
// usamos booleans quando precisamos verificar alguma condição em nosso código
console.log(true, false, 'true', 'false')

// Métodos podem retornar booleans
const email = 'bruno@gmail.com'
const includes = email.includes('gmail') // includes verifica se a string passada por argumento está incluída na string que se está atribuindo
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('roger') // o includes pode ser usados em arrays

// Operadores de comparação
const age = 38
const aName = 'bruno'

// console.log(age == 38)
// console.log(age == 35)
// console.log(age != 38)
// console.log(age > 38)
// console.log(age < 49)
// console.log(age <= 38)
// console.log(age >= 38)

console.log(aName == 'bruno')
console.log(aName == 'Bruno') // a letra maiúscula no mesmo nome atribuída a variável para o JS não é a mesma coisa.
console.log(aName > 'antonio') // a letra b de bruno atribuída a variável vem depois da letra a de antonio e para o JS as últimas letras do alfabeto são maiores que as primeiras.
console.log(aName > 'Bruno') // a letra b de bruno minúscula atribuída a variável para o JS é maior que a letra maiúscula.
console.log(aName > 'Antonio') // a letra b de bruno minúscula atribuída a variável para o JS não é só maior que a letra maiúscula, mas também maios que qualquer outra letra maiúscula.