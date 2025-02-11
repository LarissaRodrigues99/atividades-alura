alert('Seja bem vindo!');
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let menssagemDeErro = 'Erro! ao preencher todos os campos';
alert(menssagemDeErro);
let nome = prompt('Descreva o seu nome');
let idade = prompt('Digite a sua idade');

    if(idade >= 18){
        alert( 'Autorizado a retirar a habilitação!')
    }
    if(numeroDeVendas < 50){

        alert('Esse número é positivo!');
    
    }else{
        alert('Esse número é negativo');
    }

    diaDaSemana = prompt('Qual o dia da semana?');
    if(diaDaSemana == 'Sábado'){
        alert('Bom fim de semana!');
    }if (diaDaSemana == 'Domingo') {
        alert('Bom fim de semana!');
    } else {
        alert('Boa semana!');
    }


