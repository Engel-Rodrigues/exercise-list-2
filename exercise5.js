function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // Cancela a chamada anterior
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // Executa fn com o contexto e os argumentos corretos
    }, delay);
  };
}

const log = debounce(() => console.log('Executado!'), 1000);

log(); // Não executa imediatamente
log(); // Reinicia o delay
log(); // Apenas esta chamada resultará em execução após 1 segundo sem novas chamadas