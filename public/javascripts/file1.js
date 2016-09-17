var sum = null;

var addNumbers = function(firstNumber, secondNumber) {
    sum = firstNumber + secondNumber;
    return sum;
}

function getSum(firstNumber, secondNumber) {
    var value = addNumbers(firstNumber, secondNumber);
    console.log(value);
}