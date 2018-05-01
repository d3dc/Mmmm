const Script = require('./script')
const runtime = require('./m')
const sanitize = require('./sanitize')

module.exports = function mmmmEval (code, inputs, callback) {
  const m = runtime(inputs)
  const script = new Script(m, sanitize(code))

  return script.run(callback)
}
