var saySomething = function(something) {
  alert(something);
};

var add = function(number1, number2) {
  return number1 + number2;
};
var substract = function(number1, number2) {
  return number1 - number2
};

var multiply = function(number1, number2) {
  return number1 * number2
};

var divide = function(number1, number2) {
  return number1 / number2
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var addResult = add(number1, number2);
var addDisplay = "The result of adding is " + addResult;

var substractResult = substract(number1, number2);
var substractDisplay = "The result of substracting is " + substractResult;

var multiplyResult = multiply(number1, number2);
var multiplyDisplay = "The result of multiplying is " + multiplyResult;

var divideResult = divide(number1, number2);
var divideDisplay = "The result of dividing is " + divideResult;

alert(addDisplay);
alert(substractDisplay);
alert(multiplyDisplay);
alert(divideDisplay);
