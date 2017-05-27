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
// normal vs currying
match(/\s+/g)
