const Scope = require('./scope')

/**
 * Holds the "in-memory representation" of code
 * @param       {[string]} ...sources legal code
 * @constructor
 */
class Script {

  constructor (m, ...sources) {
    this._m = m
    this.source = ''
    this.scope = new Scope(m)

    sources.forEach(source =>
      this.append(source)
    )
  }

  append (source) {
    this.source += ';' + makeJs(source)
  }

  run (callback) {
    this.scope.run(this.source, callback)
  }
}

function makeJs (code) {
  return (
    code
      .replace(/M/g, 'var ')
      .replace(/\</g, 'while\(m\.d\.pop\(\)\)\{')
      .replace(/\>/g, '\}')
  )
}

module.exports = Script
