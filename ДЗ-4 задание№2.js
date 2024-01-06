const isValidNum = (num) => {
  return (typeof num === 'number' && !isNaN(num) && isFinite(num)) === true;
}

const throwError = () => {
  throw new Error('Ошибка');
}

class Calculator {
  constructor(num1 = null, num2 = null) {
    if (!isValidNum(num1) || !isValidNum(num2)) {
      throwError();
    }

    this.x = num1;
    this.y = num2;
  }

  setX = (num = null) => {
    if (!isValidNum(num)) {
      throwError();
    }

    this.x = num;
  }

  setY = (num = null) => {
    if (!isValidNum(num)) {
      throwError();
    }

    this.y = num;
  }

  logSum = () => {
    console.log(this.y + this.x);
  }

  logMul = () => { 
    console.log(this.y * this.x);
  }

  logSub = () => {
      console.log(this.x - this.y);
  } 
  

  logDiv = () => {
    if (this.y === 0) {
      throwError();
    }

    console.log(this.x / this.y);
  }
}