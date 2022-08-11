module.exports = function sumPairs (numbers, result) {
  for (let n = 0; n < numbers.length; n++) {
    const diferenciaEntreResultYNumeroN = result - numbers[n]
    const numbersSinNumeroN = numbers.slice(n + 1)
    const estaIncluidoDiferenciaEnNumbersSinNumeroN = numbersSinNumeroN.includes(diferenciaEntreResultYNumeroN)
    // console.log(n, a, b, c)
    if (estaIncluidoDiferenciaEnNumbersSinNumeroN) {
      return [numbers[n], diferenciaEntreResultYNumeroN]
    }
  }
  return null
}
