module.exports = function createXmasTree (height) {
  if (height < 1 || height > 100) return 'Entrada invalida!'

  const oddUntilN = n => Array(n).fill(2).map((x, i) => i * x + 1)

  const getLine = ({ height = 3, order = 1, charSide = '_', charCenter = '*' }) => {
    const base = height * 2 - 1
    const sideWidth = (base - order) / 2
    const centerWidth = order

    const side = `${charSide}`.repeat(sideWidth)
    const center = `${charCenter}`.repeat(centerWidth)

    return `${side}${center}${side}`
  }

  const xmasTree = oddUntilN(height).map(n => {
    return getLine({ height, order: n })
  })

  const trunk = getLine({ height, charCenter: '#' })

  xmasTree.push(trunk)
  xmasTree.push(trunk)

  return xmasTree.join('\n')
}
