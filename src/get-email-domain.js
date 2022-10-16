const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let res = email.split('@')[1]
  if(res.split('')[0] === '.') {
      return 'usual.com'
  }
  return res
  }

module.exports = {
  getEmailDomain
};
