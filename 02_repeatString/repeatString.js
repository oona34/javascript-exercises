
const repeatString = function(string, num) {
    let outputStr = '';
    if (num < 0) {
        outputStr = 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            outputStr = outputStr.concat(string);
        }
    }
    
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
