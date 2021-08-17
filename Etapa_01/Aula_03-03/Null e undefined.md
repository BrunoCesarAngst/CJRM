# Null e undefined
- **Null e undefined** são similares e **representam a falta de valor** mas Null deve ser intencionalmente atribuído

## Uma variável sem valor atribuído
`let worthlessVariable`
- Sempre que usamos uma **variável sem valor** o JS automaticamente **atribui undefined** para ela.
- Quando **usamos** uma variável com valor **undefined** em uma expressão numérica o **resultado** retornado será **NaN** - Not a Number

## Uma variável com valor Null atribuído
`let variableWithNullValue = null`
- Quando **temos a intenção** de passar um valor nulo atribuímos o valor null à variável.
- Quando usamos uma variável com **valor null** em uma expressão numérica o null **é automaticamente** interpretado como **_0_**