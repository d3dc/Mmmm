# Mmmm

> Mmmm() is an esoteric "microlanguage" by [SuperJedi224](https://github.com/SuperJedi224), inspired in part by Brainf***.

This repo will provide a javascript runtime environment for Mmmm as well as a command-line repl and compiler for ES5 Javascript.


```Mmmm
Mmm=m[m.m()].m(m.m());

Mmmm=m[mm].m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();Mmmmm=mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();mmm.m();mmm.m();mmm.m();
mmm.m();

m[mmmm].m(mmm.m());
m[mmmm].m(mmm.m());
```

## Quick Start

- `$ npm install Mmmm`

*Repl*

- `$ Mmmm`

*Compile to node module* (see [babel-cli](https://babeljs.io/docs/usage/cli/))

- `$ Mmmm mmm.mmmmm -o mmm.js`


## Goal

Learn how to write a babel plugin :P

## TODO

SuperJedi224's entire implementation can be found [here](http://jsfiddle.net/SuperJedi224/uLawt0jm/).

Obviously, it can be used as a simple javascript library. Providing a repl will entail bootstrapping the existing node one.

- [ ] Find a lightweight way to wrap a node repl
  - [ ] restrict character usage
- [ ] Babel/Babylon parse to the right AST
- [ ] Emit Mmmm for nodetypes
  - [ ] Literals
    - [ ] Object
    - [ ] Array
  - [ ] Variables
  - [ ] Statements
  - [ ] Expressions
- [ ] Polyfill core emcascript features 😕
