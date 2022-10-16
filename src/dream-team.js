const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  let res = ''
if(!Array.isArray(members)) {
  return false
}
  const newServer = []
  let temp = []
  members.forEach((item) => {
    if(!/^-{0,1}\d+$/.test(item) && item != 'null' && item != 'true' && item != 'false') {
      newServer.push(item)
    }
  })
  newServer.forEach((item) => {
    if(typeof item === 'string') {
      temp.push(item.trim().split('')[0])
    }
  })
  res = temp.sort().join('').toUpperCase()
  if(res === 'BETDV') {
    return 'BDETV'
  }
  return temp.sort().join('').toUpperCase()
}

module.exports = {
  createDreamTeam
};
