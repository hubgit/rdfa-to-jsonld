const jsonld = require('jsonld')
const parser = require('jsonld-rdfa-parser')

jsonld.registerRDFParser('text/html', parser)

module.exports = async (url, options = {}) => {
  let data = await jsonld.promises.fromRDF(url, {format: 'text/html'})

  if (options.frame) {
    data = await jsonld.promises.frame(data, options.frame)
  }

  if (options.expand) {
    data = await jsonld.promises.expand(data)
  }

  return data
}
