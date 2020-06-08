const cov = require('online-covariance')
const std = require('online-std')

module.exports = function () {
  const c = cov()
  const s1 = std()
  const s2 = std()

  return function (x, y) {
    if (Array.isArray(x) && Array.isArray(y)) {
      x.forEach((v, i) => {
        c(x[i], y[i])
        s1(x[i])
        s2(y[i])
      })
      return c() / (s1() * s2())
    } else {
      return c(x, y) / (s1(x) * s2(y))
    }
  }
}
