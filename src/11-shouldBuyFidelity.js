const successiveExponent = (base, times) => Array(times)
  .fill(base)
  .reduce((acc, el, index) => acc + el ** (index + 1), 0)

const successiveIncreases = (t, a, b) => a * successiveExponent(b, t)

module.exports = function shouldBuyFidelity (times) {
  const TICKET_PRICE = 12
  const LOYALTY_CARD_PRICE = 250
  const DISCOUNT_PER_TICKET = 0.75

  const normalTicketPrice = TICKET_PRICE * times
  const loyaltyCardPrice = LOYALTY_CARD_PRICE + successiveIncreases(times, TICKET_PRICE, DISCOUNT_PER_TICKET)
  // console.log({ times, normalTicketPrice, loyaltyCardPrice, result: normalTicketPrice > loyaltyCardPrice })
  return normalTicketPrice > loyaltyCardPrice
}
