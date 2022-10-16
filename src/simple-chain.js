const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
 
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number' || !Number.isInteger(position)) {
      this.chain = Array()
      throw new Error("You can't remove incorrect link!");
    }else {
      this.chain.splice(position - 1, 1)
    }
   
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.map(el => `( ${el} )`)
            .join('~~');
        this.chain = Array()
        return res;
  
  },
};

module.exports = {
  chainMaker,
};
