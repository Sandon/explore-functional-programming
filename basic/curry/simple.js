/**
 * Created by Sandon on 2017/5/27.
 */
const add = x => {
  return y => x + y
}

const plusOne = add(1)
const plusTen = add(10)

console.log(plusOne(100))
console.log(plusTen(100))
