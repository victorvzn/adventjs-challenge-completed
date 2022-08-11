module.exports = function getCoins (change) {
  const multiples = [1, 2, 5, 10, 20, 50]
  let acc = change
  return multiples
    .reverse()
    .map(m => {
      const quotient = Math.floor(acc / m)
      if (quotient > 0) acc = acc % m
      return quotient
    })
    .reverse()
}
