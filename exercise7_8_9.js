// --- 7. Mapeamento e Ordenação ---
// Retorna um array com os nomes dos produtos, ordenados por preço crescente
function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() // evita modificar o array original
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

// --- 8. Agrupamento por Propriedade ---
// Soma os totais por cliente usando reduce
function somarVendasPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

// --- 9a. Conversão: Pares para Objeto ---
// Converte um array de pares para objeto
function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

// --- 9b. Conversão: Objeto para Pares ---
// Converte um objeto em array de pares
function objetoParaPares(obj) {
  return Object.entries(obj);
}

// --- Exemplos de uso ---
// Descomente abaixo para testar cada função:

/*
// Ex. 7: nomesOrdenadosPorPreco
const produtos = [
  { nome: "Teclado", preco: 200 },
  { nome: "Mouse", preco: 100 },
  { nome: "Monitor", preco: 800 }
];
console.log(nomesOrdenadosPorPreco(produtos)); 
// ["Mouse", "Teclado", "Monitor"]

// Ex. 8: somarVendasPorCliente
const vendas = [
  { cliente: "Alice", total: 100 },
  { cliente: "Bob", total: 200 },
  { cliente: "Alice", total: 150 }
];
console.log(somarVendasPorCliente(vendas)); 
// { Alice: 250, Bob: 200 }

// Ex. 9: Conversão entre pares e objeto
const pares = [["nome", "João"], ["idade", 30]];
const obj = paresParaObjeto(pares);
console.log(obj); 
// { nome: "João", idade: 30 }

const novoPares = objetoParaPares(obj);
console.log(novoPares); 
// [["nome", "João"], ["idade", 30]]
*/