const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	var res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  return res;
};

const multiply = function(array) {
	var res = array[0];
  for (let i = 1; i < array.length; i++) {
    res *= array[i];
  }
  return res;
};

const power = function(a, b) {
	var res = a;
  for (let i = 1; i < b; i++) {
    res *= a;
  }
  if (b == 0) {
    return 1;
  }
  return res;
};

const factorial = function(a) {
	var res = a;
  for (let i = a - 1; i > 0; i--) {
    res *= i;
  }
  if (a == 0) {
    return 1;
  }
  return res;
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
