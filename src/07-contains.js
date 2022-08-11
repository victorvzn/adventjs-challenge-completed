function iterateObject (store, product) {
  let flag = false
  for (const prop in store) {
    if (store[prop] === product) {
      return store[prop] === product
    }
    if (typeof (store[prop]) === 'object') {
      flag = iterateObject(store[prop], product)
    }
  }
  return flag
}

module.exports = function contains (store, product) {
  return iterateObject(store, product)
}
