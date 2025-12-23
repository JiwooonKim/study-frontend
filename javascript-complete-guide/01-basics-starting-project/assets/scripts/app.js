/**
 * @defaultResult: 초기화 값
 */
const defaultResult = 0;
let currentResult = defaultResult;
let caclculationDescription = 0;

function addNumber() {
  return currentResult = currentResult + parseInt(userInput.value);
}
function minusNumber() {
  return currentResult = currentResult - parseInt(userInput.value);
}
function multiplyNumber() {
  return currentResult = currentResult * parseInt(userInput.value);
}
function divideNumber() {
  return currentResult = currentResult / parseInt(userInput.value);
}

clacBtn.forEach(btn => {
  btn.addEventListener('click', function(){
    switch (this.id) {
      case "btn-add" :
        addNumber();
        break;
      case "btn-minus" :
        minusNumber();
        break;
      case "btn-multiply" :
        multiplyNumber();
        break;
      case "btn-divide" :
        divideNumber();
        break;
    }
    outputResult(currentResult, caclculationDescription);
  })
})