const fibonacci = function(position) {
    if(parseInt(position) <0 || isNaN(parseInt(position))) return "OOPS";
    if(parseInt(position) === 0) return 0;
    if(parseInt(position) === 1 || parseInt(position) === 2) return 1;
    
    let firstNumber = 1;
    let secondNumber = 1;
        
    for (let i = 3; i<position; i++) {
        let temp = secondNumber;
        secondNumber += firstNumber;        
        firstNumber = temp;
    }
    return firstNumber + secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;