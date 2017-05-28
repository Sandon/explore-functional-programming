/**
 * Created by Sandon on 2017/5/27.
 */

const curry = require('lodash').curry

/* currying */
const match = curry((scheme, str) => {
  return str.match(scheme)
})

const replace = curry((scheme, replacement, str) => {
  return str.replace(scheme, replacement)
})

const filter = curry((fn, arr) => {
  return arr.filter(fn)
})

const map = curry((fn, arr) => {
  return arr.map(fn)
})

/* usage */

console.log(match(/\s+/g, 'hello world'))
// or
console.log(match(/\s+/g)('hello world'))


const hasSpaces = match(/\s+/g)
console.log(filter(hasSpaces, ['hellow world', 'haha']))
// or
const findSpaces = filter(hasSpaces)
console.log(findSpaces(['hellow world', 'haha']))


const noVowels = replace(/[aeiou]/ig)
const censored = noVowels('*')
console.log(censored('hello world'))
