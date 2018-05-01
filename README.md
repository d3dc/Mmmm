# Mmmm

> Mmmm() is an esoteric "microlanguage" by [SuperJedi224](https://github.com/SuperJedi224), inspired in part by Brainf***.

This repo currently provides a javascript runtime environment for Mmmm(). It provides a `Script` type that creates a sandboxed environment bound to the Mmmm micro-VM.

In the future this repo will also provide a transpiler to compile simple ES5 javascript into Mmmm() code so you never actually have to write it.


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


## Background

SuperJedi224's entire implementation can be found [here](http://jsfiddle.net/SuperJedi224/uLawt0jm/).

## Goal

I wanted to learn how to write a babel plugin for another gaming-related project.

After playing with this and seeing how haskell or lisp-like it is, these micro-vms started to make sense.
I've basically built a tiny hypervisor for sh*tty in-javascript VMs with a fun way to address them. I plan to integrate this concept into my gaming-related project.

## TODO

- [x] Script executes in private context
- [x] Script can re-enter private context for REPL use
- [x] Find a lightweight way to wrap a node repl
  - [ ] restrict character usage
  - [ ] interactive loop editing
- [ ] transform-mmmm
  - [ ] Emit Mmmm for nodetypes
    - [ ] Literals
      - [ ] Object
      - [ ] Array
    - [ ] Variables
    - [ ] Statements
    - [ ] Expressions
  - [ ] Polyfill core emcascript features 😕
