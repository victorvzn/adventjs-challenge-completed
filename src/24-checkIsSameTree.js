function showDecorations (bigTree) {
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
  const ordered = flatted.sort((a, b) => a - b)
  return ordered
}

module.exports = function checkIsSameTree (treeA, treeB) {
  // ¡No olvides compartir tu solución en redes!
  const ta = showDecorations(treeA)
  const tb = showDecorations(treeB)

  // console.log(ta, tb, ta.toString(), tb.toString(), ta.toString() === tb.toString())
  // console.log(treeA, treeB)

  return ta.toString() === tb.toString()
}
