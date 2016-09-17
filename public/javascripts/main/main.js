/*!
 Author: Ashish Kapoor
 Project: myapp2
 Last Modified: 2016-09-17 
*/

var sum = null;

var addNumbers = function(firstNumber, secondNumber) {
    sum = firstNumber + secondNumber;
    return sum;
}

function getSum(firstNumber, secondNumber) {
    var value = addNumbers(firstNumber, secondNumber);
    console.log(value);
}
var diff = null;

var diffNumbers = function(firstNumber, secondNumber) {
    diff = firstNumber - secondNumber;
    return diff;
}

function getDiff(firstNumber, secondNumber) {
    var value = diffNumbers(firstNumber, secondNumber);
}