// let age = 38
// let currentYear = 2021

// console.log(age, currentYear);

// age = 12
// console.log(age);

// const point = 100
// point = 101
// console.log(point)

var aVarVariable = "var valor global inicial";
let aLetVariable = "let valor global inicial";
const aConstVariable = "const valor global inicial";

console.log(
  `valores escopo global:\n var - ${aVarVariable},\n let - ${aLetVariable},\n const - ${aConstVariable}`
);

var aVarVariable1 = "criando nova var fora do bloco";
let aLetVariable1 = "criando nova let fora do bloco";
const aConstVariable1 = "criando nova const fora do bloco";

console.log(
  `mostrando novos valores as variáveis criadas no escopo\n var - ${aVarVariable1}\n let - ${aLetVariable1}\n const - Assignment to constant variable.`
);

if (true) {
  console.log(
    `mostrando valores escopo global dentro do escopo, antes da retribuição de valor:\n var - ${aVarVariable},\n let - ${aLetVariable},\n const - ${aConstVariable}`
  );
  aVarVariable = "alterando var no bloco";
  aLetVariable = "alterando let no bloco";
  // aConstVariable = "novo valor de const dentro do bloco"; // Uncaught TypeError - Assignment to constant variable.

  console.log(
    `mostrando valores globais dentro do escopo, após a retribuição de valor\n var - ${aVarVariable},\n let - ${aLetVariable},\n const - a const não pode ser alterada`
  );

  console.log(
    `tentando mostrar variáveis que estão fora bloco:\n new var - Cannot access 'aLetVariable1' before initialization,\n new let - Cannot access 'aLetVariable1' before initialization,\n new const - Cannot access 'aConstVariable1' before initialization`
  );

  var aVarVariable1 = "criada var no bloco";
  let aLetVariable1 = "criada let no bloco";
  const aConstVariable1 = "criada const no bloco";

  console.log(
    `mostrando novas variáveis no bloco:\n new var - ${aVarVariable1},\n new let - ${aLetVariable1},\n new const - ${aConstVariable1}`
  );
}
console.log(
  `Tentando acessar de fora as variáveis criadas no escopo\n nova var criado no escopo - ${aVarVariable1}\n nova let criada no escopo - aLetVariable1 is not defined\n nova const criada no escopo - aConstVariable1 is not defined`
);

aVarVariable1 = "alterando var criada dentro do escopo";
aLetVariable1 = "alterando let criada dentro do escopo";
// aConstVariable1 = "alterando const criada dentro do escopo"; // Assignment to constant variable.

console.log(
  `Escopo global após o bloco\n var - ${aVarVariable},\n let - ${aLetVariable},\n const - ${aConstVariable}`
);

console.log(
  `mostrando novos valores as variáveis criadas no escopo\n var - ${aVarVariable1}\n let - ${aLetVariable1}\n const - Assignment to constant variable.`
);
