const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if(arr.length == 0){
    return 0;
  }
  
  return arr.reduce((sum, current) => sum + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current, 1)
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	if(num == 0){
    return 1;
  }
  let product = 1;
  while(num > 0){
    product = product * num;
    num--;
  }
  return product;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
