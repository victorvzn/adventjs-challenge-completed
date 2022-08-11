module.exports = function wrapGifts (gifts) {
  // ¡No olvides compartir tu solución en redes!
  const firstGift = Array.from(gifts.at(0))

  const boxTopWidth = firstGift.length
  const boxTopHeight = boxTopWidth
  const BOX_SIDE = 2 // INCLUDE lEFT AND RIGHT SIDE -> 1 + 1

  const boxTop = '*'.repeat(boxTopWidth + boxTopHeight + BOX_SIDE)
  const boxBottom = boxTop
  const boxBody = gifts.map(g => (`*${g}*`))

  return [boxTop, ...boxBody, boxBottom]
}
