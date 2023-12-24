let firstNum = prompt();
let secondNum = prompt();

firstNum = Number(firstNum).toString() === firstNum ? Number(firstNum) : NaN;
secondNum = Number(secondNum).toString() === secondNum ? Number(secondNum) : NaN;

if (!isNaN(firstNum) && !isNaN(secondNum)) {

  if (secondNum === 10 || firstNum < secondNum) {
    console.log(firstNum);
  }
  
  else {
    let result = '';
    while (firstNum >= secondNum) {
      result =
        (firstNum - Math.floor(firstNum / secondNum) * secondNum).toString() +
        result;
      firstNum = Math.floor(firstNum / secondNum);

      if (firstNum < secondNum) {
        result = firstNum.toString() + result;
      }
    
    }
    console.log(Number(result));
  }
}

else {
  console.log("Некорректный ввод!");
}
