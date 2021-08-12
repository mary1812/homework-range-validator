"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  
  get from() {
    return this._from;
  }
  set from(newFrom) {
    if (isNaN(newFrom) || typeof newFrom !== 'number') {
    throw new TypeError('Invalid type');
    }

    if (newFrom > this.to) {
    throw new RangeError('From must be smallest than To');
    }
    this._from = newFrom;
  }

  get to() {
    return this._to;
  }
  
  set to(newTo) {
    if (isNaN(newTo) || typeof newTo !== 'number') {
      throw new TypeError('Invalid type');
    }

    if (newTo < this.from) {
      throw new RangeError('From must be smallest than To');
    }
    this._to = newTo;
  }
  
   get range () {
     return [this._from, this._to];
  }
  

  getValidate(number) {
    if (this.getterRange().includes(number)) {
      return number;
    }
    throw new RangeError('The number is not in the specified range ')
}
}

const test = new RangeValidator(-10, 10);
