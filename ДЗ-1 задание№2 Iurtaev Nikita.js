const ERROR_MESSAGE = "Некорректный ввод!";
let firstNum = prompt();
firstNum = Number(firstNum).toString() === firstNum ? Number(firstNum) : NaN;

if (!isNaN(firstNum)) {
  let secondNum = prompt();
  secondNum = Number(secondNum).toString() === secondNum ? Number(secondNum) : NaN;
  
  if (!isNaN(secondNum) && secondNum !== 0) {
    console.log(
      `Ответ: ${firstNum + secondNum}, ${firstNum / secondNum}.`
    );
    
  } 
  
  else {
    console.log(ERROR_MESSAGE);
  }
} 

else {
  console.log(ERROR_MESSAGE);
}
