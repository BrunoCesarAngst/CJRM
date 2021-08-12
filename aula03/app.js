// Arrays servem para armazenar uma lista de valores (números, strings), que geralmente tem uma relação entre si
// A anotação de um array é o abre fecha de colchetes contendo nenhum, um ou mais elementos separados por vírgula.

let heroes = ["Batman", "Catwoman", "Iron Man"];
const ages = [31, 25, 39, 40, 25];
const randomArray = ["Parker", "Diana", 19, 18]; // é possível armazena tipos diferentes de dados em uma array.

// reatribuindo um valor a uma array
heroes[0] = 'Flash' // <- altera o array original = ["Flash", "Catwoman", "Iron Man"]

// Propriedades e Métodos de arrays

const firstElementOfArrayHeroes = heroes[0] // é obtém o elemento do array conforme o index indicado dentro do colchetes
const joinHeroes = heroes.join('-'); // junta todos os elementos de uma array e forma uma string e se for passado um argumente ele é colocado entre esses elementos
const indexOf25 = ages.indexOf(25); // retorna o index do elemento dentro do array passado como argumento, se caso não existir retorna -1
const moreHeroes = heroes.concat(["Superman", "Wolverine"]); // <- não altera o array original cria um novo array concatenado as novas informações
const pushToHeroes = heroes.push('Cyclops', 'Hulk') // <- altera o array original, retornando um numero 5 que é o index de elementos do novo array
const popHeroes = heroes.pop() // <- altera o array original, retorna o último elemento do array removendo esse do array

console.log(heroes); 
