const sumAll = function(...args) {
    if (!args.length == 2) {
        return 'ERROR';
    } 

    for (let index = 0; index < 2; index++) {
        if (!(typeof args[index] == "number") | args[index] < 0) {
            return 'ERROR'
        };
    }

    args.sort(function(a, b){return a - b});
    const a = args[0];
    const b = args[1];

// sumAll(3, 7) = 3 + 4 + 5 + 6 + 7 = 25

    let sumResult = 0;

    for (let index = a; index <= b; index++) {
        sumResult += index;
    }
    
    return sumResult;

    };

let test = sumAll(10, "90");
let test2 = sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
