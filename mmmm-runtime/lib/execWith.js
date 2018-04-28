function makeJs (code) {
  return (
    code
      .replace(/M/g, 'var ')
      .replace(/\</g, 'while\(m\.d\.pop\(\)\)\{')
      .replace(/\>/g, '\}')
  )
}

module.exports = function execWith (M, code) {
  const final = makeJs(code)
  const applyTo = Function('m', 'use strict;' + final + ';return m')

  return applyTo(M)
}
