module.exports = function canReconfigure (from, to) {
  // ¡No olvides compartir tu solución en redes!
  const groupByValue = (from, to) => from.map((curr, index) => ([].concat(curr, to[index])), [])
  const hasSameStringLength = (from, to) => from.length === to.length

  const fromSplitted = from.split('')
  const toSplitted = to.split('')
  const grouped = groupByValue(fromSplitted, toSplitted)

  const result = []
  const result2 = []

  if (!hasSameStringLength(from, to)) {
    return false
  }

  for (const [index, [curr, next]] of grouped.entries()) {
    if (curr === next) {
      result.push(next)
      result2.push(curr)
      continue
    }

    if (result.includes(next) && result2.includes(curr)) {
      result.push(next)
      result2.push(curr)
      continue
    }

    if (result.includes(next)) {
      break
    }

    if (result2.includes(curr)) {
      break
    }

    result.push(next)
    result2.push(curr)
  }

  const joined = result.join('')
  const output = joined === to

  return output
}
