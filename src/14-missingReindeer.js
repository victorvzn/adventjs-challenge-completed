module.exports = function missingReindeer (ids) {
  // ¡No olvides compartir tu solución en redes!
  const orderedIds = [...ids].sort((a, b) => a - b)
  let missingNumber = -1
  const lastNumber = orderedIds.at(-1)
  for (let i = 0; i < orderedIds.length; i++) {
    // console.log(i, orderedIds[i], i === orderedIds[i])
    if (i !== orderedIds[i]) {
      missingNumber = i
      break
    }
  }
  return missingNumber < 0 ? lastNumber + 1 : missingNumber
}
