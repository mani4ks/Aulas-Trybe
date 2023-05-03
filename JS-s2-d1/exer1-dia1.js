let a = 35;
let b = 25;
let c = 15;
let number = 8;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));
//Parte 2//
if (a > b) {
  console.log("'a' é maior que 'b'");
} 
else {
  console.log("'b' é maior que 'a'");
};
//Parte 3//
if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)');
} 
else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)');
} 
else {
  console.log('O maior número é: ' + c + ' (c)');
};
//Parte 4//
if (number > 0) {
  console.log('Positivoo');
} 
else if (number < 0) {
  console.log('Negativoo');
} 
else {
  console.log('Zeroou');
};
