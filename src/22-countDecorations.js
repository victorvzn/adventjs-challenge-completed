module.exports = function countDecorations (bigTree) {
  // ¡No olvides compartir tu solución en redes!

  const traverseTree = (tree) => {
    const arr = []
    for (const [key, value] of Object.entries(tree)) {
      if (key === 'value') {
        arr.push(value)
      } else if (value && key === 'left') {
        arr.push(traverseTree(value))
      } else if (value && key === 'right') {
        arr.push(traverseTree(value))
      }
    }
    return arr
  }

  const values = traverseTree(bigTree)
  const flatted = values.flat(10)
  const sum = flatted.reduce((prev, curr) => prev + curr)

  return sum
}
