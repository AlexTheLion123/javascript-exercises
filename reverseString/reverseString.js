const reverseString = function(str) {
    let arr = str.split("");
    let temp="";
    let len = arr.length;
    //reverse array
    for(i=0; i<len; i++){
        let hi = arr.pop();
        temp = temp + hi;
    }
    return temp;
};

module.exports = reverseString;
