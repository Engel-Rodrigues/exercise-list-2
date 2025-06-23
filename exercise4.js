function fatorial(n) {
    if(n < 0) {
        throw new Error("Erro! Número digitado é menor que zero. Tente novamente.");
    }
    
    if(n == 0) {
        return 1;
    }
    
    return n * fatorial(n - 1);
}

let resultado = fatorial(5);
console.log(resultado);