/**
 * A unique scope instance with a run method
 * that executes code in a re-enterable environment
 */
class Scope {

  constructor (m) {
    this.loop = _evalGenerator(m) // Init
    this.loop.next() // reach yield
  }

  run (code, cb) {
    this.loop.next({ code, cb })
  }

}

/**
* """
* Generators are functions which can be exited and later re-entered.
* Their context (variable bindings) will be saved across re-entrances.
* """
* """
* Eval in non-strict mode can affect the scope of the enclosing function.
* """
*/

function* _evalGenerator (m) {
  let next
  while (true) {
    next = yield
    if (next) {
      console.log(next)
      try {
        const result = eval(next.code)
        next.cb && next.cb(null, result)
      } catch (e) {
        next.cb && next.cb(e)
      }
    }
  }
}

module.exports = Scope
