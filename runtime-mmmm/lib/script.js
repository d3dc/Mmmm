const Scope = require('./scope')

function makeJs (code) {
  return (
    code
      .replace(/M/g, 'var ')
      .replace(/\</g, 'while\(m\.d\.pop\(\)\)\{')
      .replace(/\>/g, '\}')
  )
}

/**
 * Holds the "in-memory representation" of code
 * @param       {[string]} ...sources legal Mmmm() code
 * @constructor
 */
class Script {

  constructor (m, ...sources) {
    this.scope = new Scope(m)
    this.sources = sources.map(makeJs)
  }

  append (source) {
    this.sources.push(makeJs(source))
  }

  run (callback) {
    this.scope.run(this.sources.join(';'), callback)
  }

  reset () {
    this._lines = this._lineGenerator()
  }

  step (callback) {
    if (!this._lines) {
      this.reset()
    }

    const next = this._lines.next()

    if (next.done) {
      this.reset()
      return false
    } else {
      this.scope.run(next.value, callback)
      return true
    }
  }

  * _lineGenerator () {
    for (let line of this.sources) {
      yield line
    }
  }

}

module.exports = Script
