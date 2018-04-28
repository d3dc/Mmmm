module.exports = function sanitize (code) {
  return (
    code
      .replace(/[^m\[\]\(\)\.\;\=M\,\<\>]/g, '')
      .replace(/(\=\[|\]\=]|\]\;)/g, '')
  )
}
