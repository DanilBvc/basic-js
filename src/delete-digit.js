const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit( n ) {
  let splitted = (''+n).split('')
  let nubmers = []
  for(let i = 0 ; i < splitted.length; i++) {
   let temp = [...splitted]
   temp.splice(i, 1)
   nubmers.push(+(temp.join('')))
  }
  return Math.max(...nubmers)
  }

module.exports = {
  deleteDigit
};
