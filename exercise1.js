function ehDataValida(dia, mes, ano) {
    // Array contendo todos os dias do mês, primeiro 0 para não atrapalhar a ordem dos mêses
    let diasMeses = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Valida se o ano é bissexto, caso for, ele adiciona mais 1 dia em fevereiro
    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        diasMeses[2] = 29;
    }
    
    // Verifica se o dia digitado é válido
    if(0 >= dia || dia > diasMeses[mes]) {
        return false;
    }
    
     // Verifica se o mês digitado é válido
    if(0 >= mes || mes > 12) {
        return false;
    }
    
    // Caso tudo dê certo, vai retornar true
    return true;
}

let resultado = ehDataValida(28, 6, 2010);