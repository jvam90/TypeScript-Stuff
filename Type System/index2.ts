/**
 * O sistema de tipos funciona da seguinte forma:
 * 1 - ler o código e entender que existe uma variável 'nome'
 * 2 - ver que ela é uma string devido a atribuição inicial do valor "Joao"
 * 3 - ver que se tenta usar a propriedade 'length', mas usar como uma função
 * 4 - reclamar que 'length' não é um método, mas uma propriedade
 */
let nome = "Joao";
console.log(nome.length());