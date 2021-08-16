# Comparações com igualdade estrita — Aula 04–03

exemplo
```js 
const age = 31
```

## 'igual a' e 'diferente de'
```js
console.log(age == 31) // true
console.log(age == '31') // true
console.log(age != 31) // false
console.log(age != '31') // false
```
Aqui com **duplo sinal** de igualdade, está acontecendo conversão de tipos **convertendo** o que está à **direita** do duplo sinal **de igualdade** em um **number**.

## 'igual a, e do mesmo tipo, “=\=\=”' e 'diferente de, e do mesmo tipo, “!=\=”'
Isso são _Strict equality_ e _Nonidentity operator._
```js
console.log(age === 31) //true
console.log(age === '31') // fase
console.log(age !== 31) // false
console.log(age !== '31') // true
```
Aqui **não acontecendo conversão de tipos**.