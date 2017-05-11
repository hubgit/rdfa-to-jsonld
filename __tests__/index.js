const extractor = require('../lib')

test('module exports a function', () => {
  expect(typeof extractor).toBe('function')
})

test('returns the expected value', async () => {
  const url = 'http://www.bbc.co.uk/bbcone/programmes/schedules/london/2017/01/01'

  const frame = {
    '@context': {
      '@vocab': 'http://schema.org/'
    },
    '@type': 'Episode'
  }

  const result = await extractor(url, {frame, expand: true})

  expect(result).toHaveLength(24)
  expect(result[0]['@id']).toBe('http://www.bbc.co.uk/programmes/b0396mkd')
})
