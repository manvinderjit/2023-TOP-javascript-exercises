const palindromes = function (inputString) {
    inputString = (inputString.toLowerCase()).replace(/[^a-z0-9]/g, "");
    return inputString.split("").reverse().join("") == inputString;1    
};

// Do not edit below this line
module.exports = palindromes;
