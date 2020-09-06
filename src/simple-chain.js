const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.match(/\((.*?)\)/).length; 
  },
  addLink(value) {
    let s = String(value);
    let link = '( ' + s + ' )'; 
    this.chain += this.chain.includes('(') ? ('~~' + link) : link;
    return this;
  },
  removeLink(position) {
    const res = this.chain.split('~~');
    if( position < 1 || position > res.length){
      this.chain = '';
      throw new Error('Not Valid');
    }
    else{
      if (position - 1 > -1) {
        res.splice(position - 1, 1);
      }
      this.chain = res[0];
      for (let i =1; i < res.length; i++) {
        this.chain += '~~' + res[i];
      }
    }
    return this;
  },
  reverseChain() {
    const res = this.chain.split('~~');
    res.reverse();
    this.chain = res[0];
    for (let i = 1; i < res.length; i++) {
      this.chain += '~~' + res[i];
    }
    return this;
  },
  finishChain() {
    const res = this.chain;
    this.chain = '';
    return res;
  }
};

module.exports = chainMaker;
