const repl = require('repl')

const Script = require('./script')
const Scope = require('./scope')
const runtime = require('./runtime')
const sanitize = require('./sanitize')

// Remove nodejs libs like fs and os
repl._builtinLibs = []

function evalWith (m) {
  // Start with an empty script
  // and an empty environment
  const scope = new Scope(m)

  return function mmmmReplEval (input, context, filename, callback) {
    if (input === '\n') {
      return callback(null)
    }
    const script = new Script(sanitize(input))
    scope.run(script.source, callback)
  }
}

exports.start = function start () {
  // TODO: Pass seed data
  const m = runtime()

  const server = repl.start({
    prompt: 'm ',
    eval: evalWith(m)
  })

  // There is only m
  server.context = { m }

  server.defineCommand('m', {
    help: 'Flush output buffer',
    action () {
      console.log(m.o)
      this.displayPrompt()
    }
  })

  // Mmmm() isn't interactive so flush here
  server.on('exit', () => {
    console.log(m.o)
    process.exit()
  })
}
