const prompt = require("prompt-sync")();

// função que gera um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// atribuindo o numero aleatório em uma variável
let numeroAleatorio = gerarNumeroAleatorio();

// contador de quantidade de tentativa
let contador = 0;
let entrada;

while(prompt != numeroAleatorio) {
    // Vai perguntar ao jogador qual número ele acha que é
    entrada = prompt("Qual é o número gerado pelo computador? ");
    
    // contador somando em cada tentativa
    contador++;
    
    // Caso o jogador acerte, vai sair do loop
    if(entrada == numeroAleatorio) {
        break;
    }
    
    // Caso o número for mais alto ou mais baixo, será sinalizado
    if(entrada > numeroAleatória) {
        console.log("Tente um número mais baixo");
    } else {
        console.log("Tente um número mais alto");
    }
}

// Mensagem final parabenizando o jogador por vencer
console.log(`Parabéns! Você acertou o número em ${contador} tentativa(s)`);