const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount( s1, s2 ) {
  let splitted1 = s1.split('')
  let splitted2 = s2.split('')
  let c = 0
 for(let i = 0; i < splitted1.length; i++) {
     if(splitted2.includes(splitted1[i])) {
         c++
         splitted2.splice(splitted2.indexOf(splitted1[i]), 1)
     }
 }
  return c
 }

module.exports = {
  getCommonCharacterCount
};
