alert('Sejá bem vindo!');
let numeroSecreto = parseInt(Math.random() * 30 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Quando o chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número de 1 a 30`);
    //Quando o chute for igual ao número secreto
    if(chute == numeroSecreto){

        break;
    }else{
            if(chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}`);
            }else{
        
                alert(`O número secreto é maior que ${chute}`);
            }
            tentativas++;
        }   

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você descobriu o número secreto, ${numeroSecreto} com ${tentativas} ${palavraTentativa} 🎉`);
