
# Tipos de dados

## Strings: 'Hello, World', "Olá Mundo"

**Strings** são encadeamento de caracteres (_letras, caracteres ou números_) e estarão entre aspas simples ou duplas, pode-se armazenar uma string dentro de uma variável e exibir a string no console do browser.

Podemos concatenar strings juntando o valor de duas variáveis, colocando o sinal de mais entre elas.

É possível acessar um único caracteres de uma string.
JS é zero base por tanto passamos 0 dentro de colchetes após a variável de uma string para acessar a primeira letra de uma string.

Podemos acessar as **propriedades** das strings, por exemplo, para obter o comprimento de uma string usa-se a propriedade `.length` após a variável de uma string que será contada letras, números, caracteres especias e espaços vazios que compõe a string.

Podemos atribuir **métodos** às strings que são pedaços de códigos que são embutidos a uma variável e que executam alguma ação, uma ação específica.

Por exemplo `.toUpperCase()` (converta para caixa alta) e `.toLowerCase()` (converta para caixa baixa).

Com o `.indexOf('x')` podemos encontrar o index/posição da letra específica passado como argumento dentro dos parenteses como uma string.

Já a `.lastIndexOf('x')` retorna o index/posição da última ocorrência do carácter passado como argumento .

O método `.slice(n, _n)` vai fatiar a string pelo número/index de caracteres e pegar um pedaço da string quando for passado um ou dois argumentos (_números_), quando for somente um argumento é o a partir de "n" e se for passado o segundo argumento é o desse em diante não quero.

Com o `.replace('xxx', 'yyy')` substituimos o pedaço da string especificado no primeiro argumento por uma nova string passada no segundo argumento

Esses métodos não alteram a string original no qual estão agindo.

# Template strings

Template strings (_ES6_) é uma forma mais simples e  elegante de manipular dados dentro de strings através da injeção de variáveis envolvendo a variável com chaves e colocando cifrão na frente da primeira chave. Ex.:
```js
const phrase = `
	trecho de string ${variable} outro trecho
`
```

Possibilitando e facitando a criando **template HTML** para se trabalhar conteúdos dinâmicos, providos externamente como por exemplo do banco de dados.

## Number: 1, 2, 3, 100 e 3.14
`const x = 10`

Podem ser inteiros e decimais possibilitando as operadores aritméticos respeitando a ordem de operações, essa é a ordem de precedência de operações:
- 1º parenteses
- 2º expoentes e raízes
- 3º multiplicação e divisão
- 4º adição e subtração

Podemos **incrementar** e **decrementar** um valor.
```js
x++ // 11
x-- // 9
```

Também temos esses operadores: _addition, subtraction, multiplication and division assignment_
```js
x += 10 // 20
x -= 5 // 5
x *= 3 // 30
x /= 2 // 5
```

ou seja, essas expressões como essas **short handles** são uma maneira de dizer pega o valor da variável e efetua essa operação com o valor que esta sendo passado.

NaN - not a number
Quando o JS tenta fazer o cálculo de uma expressão que não faz sentido o retorno da expressão sera _NaN_, ex.:
```js
console.log(7 / "oi"); // NaN
```

Para que aconteça a **concatenação de número com string** basta incluir o sinal de mais (+), e o trecho da string e a variável que contenha o número isso sempre resultará em uma string.

## Boolean: true, false

## Null: Uma variável explicitamente sem valor.

## Undefined: Um valor não setado.

## Object: Arrays, Datas, Literais e etc.

## Symbol: Utilizado com objetos.

## BigInt: Números muito grandes.