const fibonacci = function(num) {

    // let limitNum = parseInt(num);
    if (num < 0) {
        return "OOPS";
    }

    let fibonacciArr = [0,1];

    const calcNextFibonnaci = function(arr) {
        let subArr = arr.slice(-2);
        return subArr.reduce((total, currentIndex) => total + currentIndex);
    }

    const createFibonnaciSequence = function(fibonacciArr, num) {
        for (let i = 0; i <= num; i++) {
            let newNum = calcNextFibonnaci(fibonacciArr);
            fibonacciArr.push(newNum);
        }
    }

    createFibonnaciSequence(fibonacciArr, num);
    return fibonacciArr[num];

};

// Do not edit below this line
module.exports = fibonacci;
