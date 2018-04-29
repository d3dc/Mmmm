const Script = require('./script')
const runtime = require('./runtime')
const sanitize = require('./sanitize')

module.exports = function mmmmEval (code, inputs) {
  const script = new Script(sanitize(code))
  const m = runtime(inputs)
  return script(m)
}
