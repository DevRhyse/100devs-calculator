const buttons = document.querySelectorAll('.inputButton');
const numberInputField = document.querySelector('.numberOutput');
const stringContainCheck = /\/|x|\-|\+/g;
// to-do
// set up object to manage math formula

const mathOperators = {
    '/': (firstGatheredInput, secondGatheredInput) => firstGatheredInput / secondGatheredInput,
    'x': (firstGatheredInput, secondGatheredInput) => firstGatheredInput * secondGatheredInput,
    '+': (firstGatheredInput, secondGatheredInput) => firstGatheredInput + secondGatheredInput,
    '-': (firstGatheredInput, secondGatheredInput) => firstGatheredInput - secondGatheredInput,
}
buttons.forEach((ele, index, array) => ele.addEventListener('click', () => {
    if(ele.value === '='){
        console.log(array[ele.value].match(stringContainCheck))
        breakUserInputIntoArray(numberInputField.value)
    }else {
        numberInputField.value += ele.value
    }
}))

function breakUserInputIntoArray(currentValue){
    let splitStr = currentValue.split(' ')
    convertMathFormula(splitStr)
}
function convertMathFormula(formula){

}