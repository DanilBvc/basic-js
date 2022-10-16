const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address( n ) {
  let rightNumbers = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
  let temp = []
  let splittedArray = n.split('-')
  if(n.split('').length !== 17) {
      return false
  }
 splittedArray.forEach(element => {
  temp.push(element.split(''))
 });
 for(let i = 0; i < temp.length; i++) {
  for(let j = 0; j < temp[i].length; j++) {
      if(!rightNumbers.includes(temp[i][j])) {
          return false
      }
  }
 }
return true
}
module.exports = {
  isMAC48Address
};
