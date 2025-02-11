alert('Sejá bem vindo!');
let numeroSecreto = Math.floor(Math.random() * 30) + 1;
console.log(numeroSecreto);
let chute = prompt('Escolha um número de 1 a 30');
let tentativa = 1;

//Quando o chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número de 1 a 30`);
    //Quando o chute for igual ao número secreto
    if(chute == numeroSecreto){

        alert(`Parabéns você descobriu o número secreto, ${numeroSecreto} com o ${tentativa} número de tentativas 🎉`);
        }else{
            if(chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}`);
            }else{
        
                alert(`O número secreto é maior que ${chute}`);
            }
            tentativa++;
}

}