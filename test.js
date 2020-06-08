const test = require('tape')
const Cor = require('.')

const a = [1, 3, 2, 5, 8, 7, 12, 2, 4]
const b = [8, 6, 9, 4, 3, 3, 2, 7, 7]

test('Correlation test (online)', (_) => {
  const cor = Cor()
  a.forEach((ax, i) => { cor(ax, b[i]) })
  console.log(cor())
  _.true((cor() - (-0.907)) < 0.001)
  _.end()
})

test('Correlation (array)', (_) => {
  const cor = Cor({ ddof: 0 })
  const res = cor(a, b)
  console.log(res)
  _.true(res - (-0.907) < 0.001)
  _.end()
})
