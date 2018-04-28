const session = require('./lib/session')

function Mmmm (input, ...rest) {
  return session(input)(...rest)
}

Mmmm._ = session

module.exports = Mmmm
