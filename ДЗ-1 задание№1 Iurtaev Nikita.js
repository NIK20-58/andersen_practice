let firstNum = prompt();
let secondNum = prompt();



if (firstNum.trim()!=='' && secondNum.trim()!=='' && !isNaN(firstNum) && !isNaN(secondNum)) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  
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
