const ERROR_MESSAGE = "Некорректный ввод!";
let firstNum = prompt();

if (firstNum.trim() !== '' && !isNaN(firstNum)) {
  let secondNum = prompt();
  
  if (secondNum.trim() !== '' && !isNaN(secondNum) && secondNum !== '0') {
    console.log(`Ответ: ${Number(firstNum) + Number(secondNum)}, ${Number(firstNum) / Number(secondNum)}.`);  
  } else {
    console.log(ERROR_MESSAGE);
  }
} else {
  console.log(ERROR_MESSAGE);
}
