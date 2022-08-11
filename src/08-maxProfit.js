module.exports = function maxProfit (prices) {
  // ¡Y no olvides compartir tu solución en redes!
  const ganancias = []
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 2; j < prices.length; j++) {
      const prev = prices[i]
      const next = prices[j]
      const diff = next - prev
      if (diff > 0) {
        ganancias.push(diff)
      }
    }
  }
  ganancias.sort((a, b) => b - a)
  return (ganancias.length) ? ganancias[0] : -1
}
