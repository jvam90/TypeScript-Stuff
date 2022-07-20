/**
 * O TypeScript entende por inferência que a expressão ternária, por retornar uma string,
 * vai atribuir o tipo da variável 'randomStr' de string
 */
var randomStr = Math.random() > 0.4 ? "str1" : "str2";
console.log(randomStr);
