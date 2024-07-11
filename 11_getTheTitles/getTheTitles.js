const getTheTitles = function(arr) {

    const getTitle = function(object) {
        return object.title;
    }

    return arr.map(getTitle);
};

// Do not edit below this line
module.exports = getTheTitles;
