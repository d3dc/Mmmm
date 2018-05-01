const m = require('./m')
const counter = require('./counter')

const prompt = global.window
  ? window.prompt
  : require('readline-sync').prompt

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

module.exports = function machine (args) {
  const inputs = args || []

  const memory = {
    d: [],
    o: ''
  }

  const instructions = makeInstructions({
    0: (a) => a + 1,
    1: () => counter(),
    2: (a) => { memory.d.push(a); return memory.d.length },
    3: () => memory.d.pop(),
    4: () => Number(inputs.pop() || prompt()),
    5: (a) => memory.o += a,
    6: (a) => memory.o += String.fromCharCode(a),
    7: (a, b) => a ? b.m() : 0,
    8: (a) => (a < 1) ? 0 : a - 1,
    9: (a) => Math.random()
  })

  return Object.assign(memory, { m }, instructions)
}
