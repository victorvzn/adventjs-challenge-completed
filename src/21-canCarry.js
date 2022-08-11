module.exports = function canCarry (capacity, trip) {
  // ¡No olvides compartir tu solución en redes!
  const tripToObject = []

  for (const { 0: gifts, 1: start, 2: end } of trip) {
    tripToObject.push({ gifts, pos: start, start: true, value: gifts })
    tripToObject.push({ gifts, pos: end, end: true, value: -gifts })
  }

  const ordered = tripToObject.sort((a, b) => a.pos - b.pos)

  let acc = 0
  for (const trip of ordered) {
    acc = acc + trip.value
    if (acc > capacity) {
      return false
    }
  }

  // console.log(acc)
  // console.log(ordered)

  return true
}
