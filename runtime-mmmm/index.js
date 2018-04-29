const mmmmEval = require('./lib/eval')
const mmmmRepl = require('./lib/repl')

function Mmmm (code, ...rest) {
  return mmmmEval(code, rest)
}

Mmmm.eval = mmmmEval
Mmmm.repl = mmmmRepl

module.exports = Mmmm
