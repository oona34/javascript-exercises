const findTheOldest = function(arr) {
    const calcAge = function(obj) {
        if ("yearOfDeath" in obj) {
            return obj.yearOfDeath - obj.yearOfBirth;
        } else {
            return 2024 - obj.yearOfBirth;
        }
    }
    let sortedArr = arr.sort(function(a, b) {return calcAge(b)-calcAge(a)});
    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
