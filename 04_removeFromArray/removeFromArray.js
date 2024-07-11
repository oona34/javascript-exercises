const removeFromArray = function(arr) {
    if (arguments.length < 2) { return 'ERROR'};
    let myArray = arguments[0];
    let toRemove = [];
    let removalPositions = [];
    for (let el = 1; el< arguments.length; el++) {
        toRemove.push(arguments[el]);
    }
    
    outer: for(let i = 0; i < toRemove.length; i++) {
        for(let j = 0; j < myArray.length; j++) {
            if (toRemove[i] === myArray[j]) {
                myArray.splice(j, 1);
                j--;
                continue;
            }
        }
    }

    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
