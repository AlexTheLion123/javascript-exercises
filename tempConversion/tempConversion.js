const ftoc = function(num) {
  let cel = (num-32)*5/9;
  
  return Math.round(cel*10)/10;
};

const ctof = function(num) {
  let far = num*9/5 + 32;

  return Math.round(far*10)/10;
};

module.exports = {
  ftoc,
  ctof
};
