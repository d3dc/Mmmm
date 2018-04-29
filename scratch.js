const sources = [
  'var a = 42',
  'console.log(a)',
  'var b = a + 1',
  'console.log(b)',
  'var c = a + b',
  'console.log(c)'
]

function Test () {
  this.loop = this._env(14)
}

Test.prototype._env = function* _env (m) {
  while (true) {
    if (sources.length) {
      const next = sources.shift()
      const result = eval(next)
    }
    yield null
  }
}

const t = new Test()
for (let i = 0; i < 6; i++) {
  t.loop.next()
}
