module.exports = function daysToXmas (date) {
  // const MILISECONDS_IN_A_DAY = 1000 / 60 / 60 / 24
  const christmasDate = new Date('Dec 25, 2021')
  const dateToMiliseconds = date => +date
  const christmasDateInMiliseconds = dateToMiliseconds(christmasDate)
  const dateInMiliseconds = dateToMiliseconds(date)

  const daysLeftToChristmas = Math.ceil((christmasDateInMiliseconds - dateInMiliseconds) / 1000 / 60 / 60 / 24)
  return daysLeftToChristmas
}
