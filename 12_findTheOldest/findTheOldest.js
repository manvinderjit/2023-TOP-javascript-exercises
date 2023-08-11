const findTheOldest = function(array) {
   
    function getAge(person){
        return (person['yearOfDeath'] ? person['yearOfDeath']: new Date().getFullYear()) - person['yearOfBirth']
    };

    array.sort(function (a, b) {      

        return getAge(a) - getAge(b);
        
    });

    return array[array.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
