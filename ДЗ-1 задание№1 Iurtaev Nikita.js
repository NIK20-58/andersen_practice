let firstNum = prompt();
let secondNum = prompt();

if (firstNum.trim() !== '' && secondNum.trim() !== '' && !isNaN(firstNum) && !isNaN(secondNum)) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  console.log(firstNum.toString(secondNum))
} else {
  console.log("Некорректный ввод!");
}
