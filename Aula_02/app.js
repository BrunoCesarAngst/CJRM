// Template strings

const postTitle = "JavaScript Puro";
const postAuthor = "Bruno Angst";
const postComment = 15;

// usando concatenação
const newPost =
  'A postagem "' +
  postTitle +
  '", escrito por ' +
  postAuthor +
  " tem " +
  postComment +
  " comentários";

console.log(newPost);

// usando template strings
const postMessages = `
  A postagem ${postTitle}, escrita por ${postAuthor} tem ${postComment} comentários
`;

console.log(postMessages); 

// criando template HTML

const html = `
  <h2>${postTitle}</h2>
  <p>Author: ${postAuthor}</p>
  <strong>Este post tem ${postComment} comentários</strong>
`;
console.log(html);

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

// essa é a ordem de precedência de operações
// 1º parenteses
// 2º expoentes e raízes
// 3º multiplicação e divisão
// 4º adição e subtração

// operadores de incremento e decremento
let postLikes = 11;

// postLikes = postLikes + 1
// posso usar uma short handle
// postLikes++
postLikes--;

// operadores addition, subtraction, multiplication and division assignment
// postLikes = postLikes + 10
// outras short handle possíveis
// postLikes += 10
// postLikes -= 5
// postLikes *= 3
postLikes /= 2;

// ou seja, essas expressões come essas short handles são uma maneira de dizer
// pega o valor da variável e efetua essa operação com o valor que esta sendo
// passado

console.log(postLikes);

// NaN - not a number
// quando uma o JS tenta fazer o cálculo de uma expressão que não faz sentido
console.log(7 / "oi");

// concatenação de número com string
// isso sempre resultará em uma string
const likesMessage = "O post tem " + postLikes + " likes.";
console.log(likesMessage);

// strings um encadeamento de caracteres (letras ou números)
// entre aspas simples ou duplas
console.log("hello, world");

// podemos armazenar uma string dentro de uma variável
const email = "leona@retate.com.br";

// e exibimos a string no console do browser
console.log(email);

// podemos concatenar strings juntar o valor de duas variáveis
const firstName = "Bruno";
const lastName = "César";
const fullName = firstName + " " + lastName;

console.log(fullName);

// acessando um único caracteres de uma string
// JS é zero base por tanto passamos 0 dentro de colchetes
// para acessar a primeira letra de uma string
console.log(fullName[0]);

// propriedades de strings
// para obter o comprimento de uma string usa-se a propriedade length
// que contara letras, números, caracteres especias e espaços vazios
// que compõe a sting
console.log(fullName.length);

// métodos de string
// pedaços de códigos que são embutidos a uma variável e que executam
// alguma ação, uma ação específica
const test = fullName.toUpperCase();
const result = fullName.toLowerCase();

console.log(`toUpperCase: ${test}`);
console.log(`toLowerCase fullName: ${result}`);

// toUpperCase e toLowerCase não alteram a string original no qual estão agindo
console.log(`Original fullName: ${fullName}`);

// com o indexOf podemos encontrar o index/posição
// da letra específica dentro de uma string
const index = email.indexOf("@"); // <- dentro dos parenteses há os ARGUMENTOS

console.log(index);

// métodos comuns de string
// lastIndexOf retorna o index/posição da
// última ocorrência do carácter passado como argumento
const otherEmail = "bruno.angst@rede.ulbra.br";

const lastIndexOfA = otherEmail.lastIndexOf("a");

console.log(lastIndexOfA);

// o método slice vai fatiar e pegar um pedaço da string
const otherEmailSlice = otherEmail.slice(5, 12);

// slice não alteram a string original no qual estão agindo
console.log(otherEmailSlice, otherEmail);

// replace substitui o pedaço da string especificado no primeiro argumento
// por uma nova string passada no segundo argumento
const emailReplace = otherEmail.replace("bruno", "paulo");

// não alteram a string original no qual estão agindo
console.log(emailReplace, otherEmail);
