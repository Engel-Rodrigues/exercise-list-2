function palavrasUnicas(texto) {
    let unicos = [];
    
    let arrayPalavrasUnicas = texto.toLowerCase().split(" ");
    
    for(let i = 0; i < arrayPalavrasUnicas.length; i++) {
        
        let repetida = false;
        
        let palavraAtual = arrayPalavrasUnicas[i];
        
        for(let j = 0; j < unicos.length; j++) {
            if(palavraAtual == unicos[j]) {
                repetida = true
                break;
            }
        }
        
        if(!repetida) {
            unicos.push(palavraAtual);
        }
    }
    
    return unicos
}

let resultado = palavrasUnicas("olá olá mundo mundo");
console.log(resultado);