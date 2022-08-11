module.exports = function decodeNumbers (symbols) {
  // ¡No olvides compartir tu solución en redes!

  const SYMBOLS = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }
  const splitted = symbols.split('')
  const newSymbols = []

  for (let i = 0; i < splitted.length; i++) {
    const currSym = splitted[i]
    const currVal = SYMBOLS[currSym]
    const posSym = splitted[i + 1]
    const posVal = SYMBOLS[posSym]

    const isAValidSymbol = symbol => Object.keys(SYMBOLS).includes(symbol)

    if (!isAValidSymbol(currSym)) {
      return NaN
    }

    if (posVal > currVal) {
      // console.log('>>', currVal, posVal)
      newSymbols.push(currVal * -1)
      continue
    }
    newSymbols.push(currVal)
    // console.log({ i, currSym, currVal, posSym, posVal })
  }

  // console.log(newSymbols)

  return newSymbols.reduce((prev, next) => prev + next, 0)
}
