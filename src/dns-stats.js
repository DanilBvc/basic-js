const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats( domains ) {
  let res ={}
  if(domains.length === 0) {
    return new Object()
  }
  domains.forEach(element => {
      let splittedArray = element.split('.').reverse()
      let temp = ''
      for(let i = 0; i < splittedArray.length; i++) {
          temp = `${temp}.${splittedArray[i]}`
          if(res[temp]) {
              res[temp] += 1
          }else{
              res[temp] = 1
          }
      }
  });
  return res
  }

module.exports = {
  getDNSStats
};
