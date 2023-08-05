const sumAll = function(startingNumber, endingNumber) {
    if(typeof startingNumber !== "number" || typeof endingNumber !== "number" || startingNumber < 0 || endingNumber <0){
        return ("ERROR");
    } 
    let sum = 0;
    if(startingNumber > endingNumber){
        let temp = startingNumber;
        startingNumber = endingNumber;
        endingNumber = temp;
    }
    for (let i=startingNumber; i<=endingNumber; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
