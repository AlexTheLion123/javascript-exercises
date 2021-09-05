const sumAll = function(a,b) {
    if(typeof(a)!="number" || typeof(b)!="number" || a<0 | b<0){
        return "ERROR";
    }

    let sum = 0;

    if(a>b){
       let c=a;
       a = b;
       b = c;
    }

    for(i=a; i<=b; i++){
        sum += i;
    }

    return sum;
};

module.exports = sumAll;
