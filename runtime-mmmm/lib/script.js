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
function Script (...sources) {
  this.source = sources.map(makeJs).join(';')
}

module.exports = Script
