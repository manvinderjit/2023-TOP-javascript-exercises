const add = function(a , b) {
  return a + b;  	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(inputArray) {
	return inputArray.reduce( (total, num) => {
    return total + num;    
  }, 0);
};

const multiply = function(inputArray) {  
  return inputArray.reduce( (total, num) => {
    return total * num;    
  });
};

const power = function(a, b) {
  return Math.pow(a, b);	
};

const factorial = function(inputNumber) {
  inputNumber = parseInt(inputNumber);
  if(inputNumber === 0 || inputNumber === 1)	return 1;
  if(inputNumber >= 2){
    let factorialValue = 1;
    for(let i=1; i<=inputNumber; i++){
      factorialValue *= i;
    }
    return factorialValue;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
