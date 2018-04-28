const runtime = require('./lib/runtime')
const sanitize = require('./lib/sanitize')
const execWith = require('./lib/execWith')

function exec (code, ...rest) {
  const args = rest.flatten().map(Number)
  const m = runtime(args)

  return execWith(m, code)
}

module.exports = function session (input) {
  const code = sanitize(input)

  return (...args) => exec(code, ...args)
}
