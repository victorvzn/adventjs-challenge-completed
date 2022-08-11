module.exports = function contarOvejas (ovejas) {
  const hasLetter = (word, letter) => word.includes(letter)

  return ovejas.filter(oveja => {
    const nameLowered = oveja.name.toLowerCase()

    const hasLetterN = hasLetter(nameLowered, 'n')
    const hasLetterA = hasLetter(nameLowered, 'a')
    const isRedColor = oveja.color === 'rojo'

    return isRedColor && hasLetterN && hasLetterA
  })
}
