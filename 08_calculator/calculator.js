const add = function(nb1, nb2) {
	return nb1 + nb2;
};

const subtract = function(nb1, nb2) {
  return nb1 - nb2;
	
};

const sum = function(arr) {
  return arr.reduce((total, currentItem) => total + currentItem, 0);
};


const multiply = function(arr) {
  return arr.reduce((total, currentItem) => total * currentItem, 1);
};

const power = function(nb1, nb2) {
	return Math.pow(nb1, nb2);
};

const factorial = function(nb) {
  let arr = [];
  for (let i = nb; i > 0; i--) {
    arr.push(i);
  }
  return arr.reduce((total, currentItem) => total * currentItem, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
