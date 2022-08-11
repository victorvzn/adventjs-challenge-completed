module.exports = function getMinJump (obstacles) {
  // ¡No olvides compartir tu solución en redes!
  const orderedObstacles = [...obstacles].sort((a, b) => a - b)
  const lastObstacle = orderedObstacles.at(-1)
  const validRoutes = []

  for (let i = 1; i <= lastObstacle; i++) {
    let isValidRoute = true

    for (let j = 0; j <= lastObstacle; j = j + i) {
      // if (i === 7) console.log('X', i, j)
      if (obstacles.includes(j)) {
        isValidRoute = false
        // if (i === 7) console.log('S', i, j, obstacles.includes(j))
        break
      }
    }

    if (isValidRoute) {
      validRoutes.push(i)
    }
  }

  return validRoutes.at(0)
}
