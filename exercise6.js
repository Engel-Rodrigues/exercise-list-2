function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const slowSquare = memoize((n) => {
  console.log(`Calculando ${n}²`);
  return n * n;
});

console.log(slowSquare(4)); // Calcula e mostra "Calculando 4²"
console.log(slowSquare(4)); // Usa cache, não mostra log