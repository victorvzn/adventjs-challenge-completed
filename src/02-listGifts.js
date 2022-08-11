module.exports = function listGifts (letter) {
  const letterSplitted = letter.split(/\s* \s*/)
  const crossedOutWordsFiltered = letterSplitted.filter(word => !word.startsWith('_'))
  const emptyWordsFiltered = crossedOutWordsFiltered.filter(word => word)
  const wordsRepeated = emptyWordsFiltered.reduce((acc, el) => {
    const elLowered = el.toLowerCase()
    const elTrimmed = elLowered.trim()
    if (acc[elTrimmed]) {
      acc[elTrimmed]++
    } else {
      acc[elTrimmed] = 1
    }
    return acc
  }, {})
  return wordsRepeated
}
