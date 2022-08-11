module.exports = function fixFiles (files) {
  // ¡No olvides compartir tu solución en redes!
  const fileList = files.reduce((prev, curr, index) => ({ ...prev, [curr]: [] }), {})

  for (const index in files) {
    const file = files[index]
    const order = fileList[file].length
    const fileName = order > 0 ? `${file}(${order})` : file
    fileList[file].push({ index: Number(index), file: fileName, order })
  }

  const values = Object.values(fileList)
  const flatted = values.flat()
  const ordered = flatted.sort((a, b) => a.index - b.index)
  const newFileNames = ordered.map(o => o.file)

  return newFileNames
}
