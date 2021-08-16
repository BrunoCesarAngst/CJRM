# Booleans e comparadores
- **true** e **false** que não estão entre aspas são valores especiais **são booleans**
- Usamos **booleans** quando precisamos **verificar** alguma **condição** em nosso código

## Métodos podem retornar booleans
```js
const stringVariable = 'xxxxx@yyyy.zzz'

const isIncluded = stringVariable.includes('yyyy') // true
```
- includes **verifica** se a **string passada** por argumento **está** incluída **na string** que se está atribuindo
```js
const names = ['dio', 'roger', 'robert']

const arrayIncludes = names.includes('roger') // true
```
- o **includes** pode ser **usados em arrays**

## Operadores de comparação
### Comparações entre números
```js
const age = 38

console.log(age == 38) // true
console.log(age == 35) // false
console.log(age != 38) // false
console.log(age > 38) // false
console.log(age < 49) // true
console.log(age <= 38) // true
console.log(age >= 38) // true
```

### Comparações entre strings
```js
const aName = 'name'

console.log(aName == 'name') // true
```

```js
console.log(aName == 'Name') // false
```
 - A **letra maiúscula** no mesmo nome atribuída a variável para o JS **não é a mesma coisa**.

```js
console.log(aName > 'otherName') // true
```
 - A letra **"n"** de _name_ atribuída a variável vem **antes** da letra **"o"** de otherName e para o JS **as últimas letras** do alfabeto **são maiores** que as primeiras.

```js
console.log(aName > 'Name') // false
```
 - A letra **"n"** de _name_, **minúscula** atribuída a variável para o JS é **maior que** a letra **maiúscula**.

```js
console.log(aName > 'OtherName') // false
```
 - A letra **"n"** de _name_, **minúscula** atribuída a variável para o JS não é só maior que a letra maiúscula, mas também **maior que qualquer outra letra maiúscula**.