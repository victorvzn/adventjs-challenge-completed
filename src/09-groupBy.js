function isString (value) {
  return typeof (value) === 'string'
}

module.exports = function groupBy (collection, it) {
  // console.log({ collection, it })
  return collection.reduce((acc, el) => {
    let keyEl = null
    let valueFn = null

    if (isString(it) && it === 'length') {
      keyEl = el.length
      valueFn = c => c.length === el.length
    }

    if (isString(it)) {
      keyEl = el[it]
      valueFn = c => c[it] === el[it]
    }

    if (!isString(it)) {
      keyEl = it(el)
      valueFn = c => it(c) === it(el)
    }

    return {
      ...acc,
      [keyEl]: collection.filter(valueFn)
    }
  }, {})
}
