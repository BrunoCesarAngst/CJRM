// Null e undefined são similares e representam a falta de valor
// mas Null deve ser intencionalmente atribuído

// uma variável sem valor atribuído
// let emptiness
// sempre que usamos uma variável sem valor o JS automaticamente 
// atribui undefined para ela
// e quando usamos uma variável com valor undefined em uma expressão 
// numérica o resultado retornado será NaN - Not a Number

// quando temos a intenção de passar um valor nulo atribuímos o 
// valor null à variável
let emptiness = null
// quando usamos uma variável com valor null em uma expressão 
// numérica o null é automaticamente interpretado como 0

console.log(emptiness, emptiness + 3, `o valor da variável é ${emptiness}`)