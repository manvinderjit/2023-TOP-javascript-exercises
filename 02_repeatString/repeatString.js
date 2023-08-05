const repeatString = function(string, num) {
    if(num < 0) return "ERROR";
    let repeatedString = "";
    for(let repetitions = 0; repetitions<num; repetitions++){
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
