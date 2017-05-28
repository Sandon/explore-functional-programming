/**
 * Created by Sandon on 2017/5/28.
 * answers to https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch4.html#in-summary
 */
const _ = require('ramda')

/* exercise 1 and 1a */
const words = (str) => _.split(' ', str)
// to
const fpWords = _.split(' ')
const sentences = _.map(fpWords)
console.log(sentences(['hello world', 'js html']))

/* exercise 2 */
const filterQs = (xs) => {
  _.filter((x) => _.match(/q/i, x), xs)
}

// to
const fpFilterQs = _.filter(_.match(/q/i))
console.log(fpFilterQs(['q', 'hello', 'q2', 'world']))
console.log(_.match(/q/i)('01'))
// _.match当不匹配时返回的是[]，而不是Null