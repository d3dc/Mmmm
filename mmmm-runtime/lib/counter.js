module.exports = function counter () {
  return {
    a: 0,
    m: function () {
      this.a++
      return this.a
    }
  }
}
