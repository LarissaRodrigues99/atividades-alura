console.log('Seja bem vindo(a)!');

let nome = 'Larissa';

let valorI = 1;
let valorII = 100;

console.log (`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);

let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(pergunta);

soma = valorI + valorII;
let resultado = soma;
console.log(`A soma de ${valorI} e ${valorII} é igual a ${resultado}`);

subtracao = valorI - valorII;
let resultadoII = subtracao;
console.log(`A diferença entre ${valorII} e ${valorI} é ${resultadoII}`);

let idade = prompt("Informe a sua idade:");
if(idade < 18){
    console.log("Você é menor de idade!");
}else{console.log("Voce é maior de idade!");}

let numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

let nota = 10;
if(nota >= 7){
    console.log("Parabéns você passou!");
}else {
    console.log("Que pena, você foi reprovado!");
}
let numeroAleatorio = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio);