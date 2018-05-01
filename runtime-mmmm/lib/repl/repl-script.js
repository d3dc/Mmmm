const Scope = require('./scope')
const Script = require('./script')

// When do I switch to a real parser?
const wrapInLoop = s => `;while\(m\.d\.pop\(\)\)\{${s}}`
const recurseInlineLoop = code =>
  code.replace(/(?:\<(.*)\>)+/, match =>
    wrapInLoop(recurseInlineLoop(match[1]))
  )
const swapVars = code => code.replace(/M/g, 'var ')

// air quotes
function compile (code) {
  const inline = recurseInlineLoop(swapVars(code))
  console.log(inline)
  const opens = inline.match(/(?:(\<)(.*)?)+/g)
  const closes = inline.match(/(?:(\>)(.*)?)+/g)
  if (opens) {
    return opens
  }

  if (closes) {
    return closes
  }

  return [inline]
}

/**
 * A Script that uses a parser to provide line-by-line compiling
 * @param       {[string]} ...sources legal code
 * @constructor
 */
class ReplScript extends Script {
  constructor (...args) {
    this._blocks = []
    this.sources = []
    super(...args)
  }

  append (source) {
    this.sources.push(...compile(source))
    console.log(this.sources)
    super.append(source)
  }

  run (...args) {
    this.reset()
    super.run(...args)
  }

  reset () {
    if (this._blocks.length) {
      this.scope = this._blocks.pop()
      this._blocks = []
    }

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
      let line = next.value

      if (line === '<') {
        this.enterBlock()
        callback(null, '...')
      } else if (this._blocks.length) {
        if (line === '>') {
          const buffer = this.exitBlock()
          if (buffer) {
            this.scope.run(buffer, callback)
          } else {
            callback(null, '...')
          }
        } else {
          this._blocks[0].buffer += line
          this.scope.run(line, callback)
        }
      } else {
        this.scope.run(line, callback)
      }

      return true
    }
  }

  enterBlock () {
    this._blocks.unshift({ buffer: '', scope: new Scope(this._m) })
  }

  exitBlock () {
    const exiting = this._blocks.shift()

    if (exiting) {
      if (!this._blocks.length) {
        return exiting.buffer
      }

      if (this._blocks.length) {
        this._blocks[0].buffer += wrapInLoop(exiting.buffer)
      }
    }

    return undefined
  }

  * _lineGenerator () {
    for (let line of this.sources) {
      yield line
    }
  }

}

module.exports = ReplScript
