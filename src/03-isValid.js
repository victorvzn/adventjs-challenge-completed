module.exports = function isValid (letter) {
  const hasChar = (word, char) => word.includes(char)
  const gifts = letter.match(/\([^)]*\)/g)

  if (!gifts) return false

  const invalidGifts = gifts.filter(gift => {
    const criteriaA = hasChar(gift, '{')
    const criteriaB = hasChar(gift, '[')
    const criteriaC = hasChar(gift, '()')
    return criteriaA || criteriaB || criteriaC
  })

  return invalidGifts.length === 0
}
