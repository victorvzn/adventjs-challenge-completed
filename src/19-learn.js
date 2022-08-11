module.exports = function learn (time, courses) {
  // ¡No olvides compartir tu solución en redes!
  const results = []

  for (let i = 0; i < courses.length; i++) {
    const iCourse = courses[i]
    for (let j = 0; j < courses.length; j++) {
      const jCourse = courses[j]
      if (i !== j) {
        const option = [iCourse, jCourse]
        const indexes = [i, j]
        const sum = option.reduce((a, b) => a + b)
        results.push({ time, sum, option, indexes })
      }
    }
  }

  const filtered = results.filter(r => r.sum === time)
  const ordered = results.sort((a, b) => b.sum - a.sum)

  // console.log(ordered.length, ordered)

  if (filtered.length) {
    return filtered[0]?.indexes ?? null
  }

  if (ordered.length) {
    const filtered = results.filter(r => r.sum < time)
    return filtered[0]?.indexes ?? null
  }
}
