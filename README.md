# online-correlation

Calculate correlation between two variables

### Usage

**Online** (piece by piece)
```javascript
const corr = require('online-correlation')
const c = corr()

const a = [1, 3, 2, 5, 8, 7, 12, 2, 4]
const b = [8, 6, 9, 4, 3, 3, 2, 7, 7]

a.forEach((_, i) => {
  c(a[i], b[i])
})

const res = c()
console.log(res) // -0.9069
```

**Arrays** (passing arrays)
```javascript
const corr = require('online-correlation')
const c = corr()

const a = [1, 3, 2, 5, 8, 7, 12, 2, 4]
const b = [8, 6, 9, 4, 3, 3, 2, 7, 7]

const res = c(a, b)
console.log(res) // -0.9069
```

or

```javascript
const res = corr()(a, b)
```
