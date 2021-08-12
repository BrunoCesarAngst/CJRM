# Arrays
- Arrays servem para **armazenar** uma lista de **valores** (_números, strings_), que geralmente tem uma **relação entre si**.
 - A anotação de um array é o **abre e fecha de colchetes** ( [ ] ) contendo nenhum, um ou mais elementos separados por vírgula.
- **É possível** armazena tipos diferentes de dados em uma array exemplo de **array contendo números e strings**.

## reatribuindo um elemento de array
```js
nameOfArray[0] = 'New value'
// isso altera o elemento do index indicado entre o colchetes da array original.
```

## Propriedades e Métodos de arrays

1. `const firstElementOfArrayHeroes = nameOfArray[0];` - é obtém o elemento do array conforme o index indicado dentro do colchetes.
2. `const joinElementsOfArray = nameOfArray.join('-');` - junta todos os elementos de uma array e forma uma string e se for passado um argumente ele é colocado entre esses elementos.
3. `const getIndexOfElementX = nameOfArray.indexOf(x);` - retorna o index do elemento dentro do array passado como argumento, se caso não existir retorna -1.
4. `const moreElementsInArray = nameOfArray.concat(["Xxxxx", "Yyyyy"]);` - não altera o array original cria um novo array concatenado as novas informações.
5. `const pushToArray = nameOfArray.push('Wwwww', 'Zzzzz');` - altera o array original, retornando um numero 5 que é o index de elementos do novo array.
6. `const popArray = nameOfArray.pop();` - altera o array original, retorna o último elemento do array removendo esse do array original.
