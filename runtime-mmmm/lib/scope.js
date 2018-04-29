/**
* """
* Generators are functions which can be exited and later re-entered.
* Their context (variable bindings) will be saved across re-entrances.
* """
* """
* Eval in non-strict mode can affect the scope of the enclosing function.
* """
*/

function* _generator (m) {
  let next
  while (true) {
    next = yield
    if (next) {
      try {
        const result = eval(next.code)
        next.cb && next.cb(null, result)
      } catch (e) {
        next.cb && next.cb(e)
      }
    }
  }
}

class Scope {

  constructor (m) {
    this.loop = _generator(m) // Init
    this.loop.next() // first yield
  }

  run (code, cb) {
    this.loop.next({ code, cb })
  }

}

module.exports = Scope
