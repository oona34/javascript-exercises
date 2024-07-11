const reverseString = function(string) {
    let inputArr = [];
    for (let i = string.length ; i > 0; i--) {
        inputArr.push(string[i-1]);
    }
    return inputArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
