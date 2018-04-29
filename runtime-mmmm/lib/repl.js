const repl = require('repl')

const Script = require('./script')
const runtime = require('./runtime')
const sanitize = require('./sanitize')

// Remove nodejs libs like fs and os
repl._builtinLibs = []

function evalWith (m) {
  // Start with an empty environment
  const script = new Script(m)

  return function mmmmReplEval (input, context, filename, callback) {
    if (input === '\n') {
      return callback(null)
    }
    script.append(sanitize(input))
    script.step(callback)
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
      m.o = ''
      this.displayPrompt()
    }
  })

  // Mmmm() isn't interactive so flush here
  server.on('exit', () => {
    console.log(m.o)
    process.exit()
  })
}
