const m = require('./m')
const counter = require('./counter')

// TODO: Does this like have to be boxed?
// Everything would use MValue and need to be unboxed...
Number.prototype.m = function () { return this % 10 }

function makeInstructions (ops) {
  return Object.keys(ops)
    .reduce((result, key) => {
      result[key] = { m: ops[key] }
      return result
    }, {})
}

module.exports = function runtime (args) {
  const inputs = args || []
  const out = ''
  const stack = []

  const memory = {
    o: out,
    d: stack,
    i: inputs.slice()
  }

  const instructions = makeInstructions({
    0: (a) => a + 1,
    1: () => counter(),
    2: (a) => { stack.push(a); return stack.length },
    3: () => stack.pop(),
    4: () => inputs.pop() || prompt(),
    5: (a) => out += a,
    6: (a) => out += String.fromCharCode(a),
    7: (a, b) => a ? b.m() : 0,
    8: (a) => (a < 1) ? 0 : a - 1,
    9: (a) => Math.random()
  })

  return Object.assign({ m }, memory, instructions)
}
