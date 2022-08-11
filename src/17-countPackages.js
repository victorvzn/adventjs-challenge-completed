module.exports = function countPackages (carriers, carrierID) {
  // ¡No olvides compartir tu solución en redes!
  let result = 0

  const normalized = carriers.reduce((prev, curr) => {
    const { 0: id, 1: packages, 2: subordinates } = curr
    return { ...prev, [id]: { packages, subordinates } }
  }, {})

  const findCarriers = (carriers, carrierIDs) => {
    const ids = Array.isArray(carrierIDs) ? carrierIDs : [carrierIDs]

    const acc = []

    for (const subordinateID of ids) {
      const carrier = carriers[subordinateID]
      const subIDs = carrier.subordinates
      const packs = carrier.packages

      // console.log(subordinateID, packs, subIDs)
      const newSubs = findCarriers(carriers, subIDs)

      acc.push([...newSubs, packs])
    }

    return acc.flat()
  }

  const add = arr => arr.reduce((prev, curr) => prev + curr, 0)

  result = findCarriers(normalized, carrierID)

  return add(result)
}
