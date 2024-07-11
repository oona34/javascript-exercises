const palindromes = function (str) {

    const isLetterOrNum = function (char) {
        if(char.match(/[a-z0-9]/)) {
            return true;
        } else {
            return false;
        }
    }

    let filteredArr = Array.from(str.toLowerCase()).filter(isLetterOrNum);
    let reversedArr = filteredArr.toReversed();
    
    if (filteredArr.join("") === reversedArr.join("")) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
