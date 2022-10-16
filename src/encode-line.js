const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str ) {
  let splitted = str.split('')
  let res = ''
  let c = 1
  for(let i = 0; i < splitted.length; i++) {
    let tempWord = splitted[i]
    if(tempWord === splitted[i+1]) {
     c++
    }else {
     if(c === 1) {
         res += tempWord
     }else {
         res += c + tempWord
         c = 1
     }
    }
  }
  return res
 }

module.exports = {
  encodeLine
};
