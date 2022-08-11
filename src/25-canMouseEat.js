module.exports = function canMouseEat (direction, game) {
  if (game.length === 0) return

  const DIRECTIONS = {
    up: { x: -1, y: 0 },
    down: { x: 1, y: 0 },
    right: { x: 0, y: 1 },
    left: { x: 0, y: -1 }
  }

  const mappingGame = game.map((row, indexRow) => {
    return row.map((col, indexCol) => ({
      x: indexRow,
      y: indexCol,
      type: col
    }))
  })
  const mappingGameFlatten = mappingGame.flat()

  const objects = mappingGameFlatten
    .filter(({ type }) => type !== ' ')

  const mouse = objects.find(o => o.type === 'm')
  const nearbyFood = objects.filter(o => o.type === '*')
  const dir = DIRECTIONS[direction]

  return nearbyFood.some(
    f => mouse.x + dir.x === f.x && mouse.y + dir.y === f.y
  )
}
