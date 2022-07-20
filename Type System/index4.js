/**
 * Quando não se atribui algum valor a uma variável, o TypeScript atribui o tipo
 * 'any', que pode ser qualquer coisa. A variável sofre de 'evolução do any', que
 * o TypeScript vai entendendo o tipo ao longo do código em cada nova atribuição.
 */
var variavel;
variavel = 10.12;
console.log(variavel.toPrecision(1));
variavel = "joao";
console.log(variavel.length);
/**
 * O código acima é válido, mas elimina a verificação de tipos. Para poder declarar
 * sem atribuir, além de ter um código mais legível e garantir que não sejam usados
 * valores de tipos incompatíveis, pode se usar anotação de tipos:
 */
var meuNome;
//sintaxe: let <nome da variável> : <tipo da variável>.
var obj = {
    a: 1,
    b: 2
};
console.log(obj);
