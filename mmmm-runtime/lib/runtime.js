const counter = require('./counter')

// TODO: Can this be like boxed?
Number.prototype.m=function(){return this%10};

module.exports = function makeM (args) {
  return Object.assign([], {
    a: args
    d: [],
    o: '',
    m: () => 0,
    0: (a) => a+1,
    1: () => counter(),
    2: (a) => { this.d.push(a); return m.d.length },
    3: () => this.d.pop(),
    4: () => this.a.pop(),
    5: (a) => this.o += a,
    6: (a) => m.o+=String.fromCharCode(a),
    7: (a,b) => a ? b.m() :  0,
    8: (a) => (a < 1) ? 0 : a-1,
    9: (a) => Math.random(),
  })
}