const fibonacci = function(n) {
    if(n<0){
        return "OOPS";
    }
    
    if(typeof n == "number"){
        n = parseInt(n);
    }

    if(n==1 || n==2){
        return 1;
    }
    
    let previous = 1;
    let current = 1;
    let result = 0;
    let counter = 1;

    while(counter < n-1){
        result = previous + current;
        previous = current;
        current = result;
        counter++;
    }
    return result;
};

module.exports = fibonacci;
