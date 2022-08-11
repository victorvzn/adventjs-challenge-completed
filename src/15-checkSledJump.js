module.exports = function checkSledJump (heights) {
  // ¡No olvides compartir tu solución en redes!
  const maxHeight = Math.max(...heights)
  const indexMaxHeight = heights.findIndex(h => maxHeight === h)
  // const parableLeftSide = heights.slice(0, indexMaxHeight + 1)
  // const parableRightSide = heights.slice(indexMaxHeight)
  let isParable = []
  let leftSide = 0
  let rightSide = 0

  for (let i = 0; i < heights.length - 1; i++) {
    const el = heights[i]
    const prevNum = heights[i]
    const nextNum = heights[i + 1]

    if (nextNum && i < indexMaxHeight) {
    	// console.log(i, el, '-', nextNum, '>' , prevNum, nextNum > prevNum)
      isParable.push(nextNum > prevNum)
      leftSide++
    } else {
    	// console.log(i, el, '-', nextNum, '<', prevNum, nextNum < prevNum)
      isParable.push(nextNum < prevNum)
      rightSide++
    }
  }

  isParable = [...new Set(isParable)]

  return isParable.length === 1 && isParable[0] === true && leftSide > 0 && rightSide > 0
}
