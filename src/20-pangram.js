// Source: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

module.exports = function pangram (letter) {
  // ¡No olvides compartir tu solución en redes!
  const SUM_ABC = 3088

  const lowered = letter.toLowerCase()
  const noSpaces = lowered.replace(/\s/g, '')
  const noSpecialChars = noSpaces.replace(/[&\/\\#,+()$~%.'":*?<>{}¡!]/g, '')
  const noAccentsAndDiacritics = noSpecialChars.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2').normalize()

  const splitted = noAccentsAndDiacritics.split('')
  const uniques = [...new Set(splitted)]
  const charsToUnicode = uniques.map(s => s.charCodeAt(0))
  const sumed = charsToUnicode.reduce((prev, curr) => prev + curr)

  return sumed === SUM_ABC
}
