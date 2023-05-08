//Parte1//

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */

//Parte 2//

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result); */

//Parte 3//

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

let media = soma / numbers.length;
console.log(media); */

//parte 4//

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
} */

//Parte 5//

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior = numbers [0];

for (let index = 1; index < numbers.length; index += 1) {
  if(numbers[index] > numeroMaior) {
    numeroMaior = numbers[index]
  }
}

console.log(numeroMaior); */

//Parte 6//

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    resultado += 0;
  }
}

if (resultado === 0) {
  console.log('nem um valor impar encontrado');
} else {
  console.log(resultado);
} */

//Parte 7//

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}

console.log(menorNumero); */

//Parte 8//

/* let numeros = [];

for (let index = 1; index <= 25; index +=1) {
  numeros.push(index);
}

console.log(numeros);

for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index] / 2);
} */

