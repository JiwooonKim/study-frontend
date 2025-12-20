/**
 * @defaultResult: 초기화 값
 */
const defaultResult = 0;
let currentResult = defaultResult;
let inputValue = 0;
let caclculationDescription = '(' + defaultResult + '+10) *3';

function addNumber(num1, num2) {
  const result = num1 + num2;
  return result;
}
currentResult = addNumber(1,2);

addBtn.addEventListener('click', () => {
	outputResult(currentResult, caclculationDescription)
})