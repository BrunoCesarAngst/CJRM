# Introdução
Após configurar o ambiente de desenvolvimento com o [VSCODE](https://code.visualstudio.com) como IDE para escrever o código e instalar um plugin [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para gerar um servidor local em minha maquina para que possa servir a aplicação localmente.

## ➡️
Aprendi a **manipular o console do browser** como sendo um **playground** para **interagir, visualizar e testar** o código JavaScript da aplicação.

# Lincar arquivos
## 🔗
Aprendi a **lincar** o arquivo de HTML a um **arquivo externo** de JavaScript, o que contribui com a **organização** e a **legibilidade** do código, evitando em colocar todos códigos em um mesmo arquivo (mesmo sendo possível).

```html
<!DOCTYPE html>
<html lang="pt-br">	
  <head>
    <meta charset="UTF-8" />
	<title>Aula 01</title>
  </head>
  <body>
	<h1>CJRM - Aprendendo</h1>
 ** <script src="app.js"></script> **
  </body>
</html>
```

# Variáveis, constantes
## Variáveis 🧷
VAR  - Sintaxe antiga para se declarar o nome de uma variável, de valor re-atribuível de escopo global, se dentro de função, só é visível dentro da função geratriz, além da variável ser içada (_hoisting_) ela é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor), bloco simples não é considerado escopo relevante.

LET - Sintaxe moderna (ECMAScript 6) para se declarar o nome de uma variável, de escopo bloco e de valor re-atribuível dentro do escopo do bloco e não sofre com o processo de hoisting.

CONST - Sintaxe também moderna (ECMAScript 6) para se declarar o nome de uma variável, de escopo bloco e de valor não re-atribuível, a não ser que seja uma propriedade de um objeto.


# Comentários no código
// - Comentário de uma linha

/**/ - comentário de múltiplas linhas