const leapYears = function(year) {
    leap = false;

    if(year%4==0){
        leap = true;
        if(year%100==0){
            if(year%400==0){
                leap=true;                
            } else {
                leap = false;
            }
        }
    }

    return leap;
};

module.exports = leapYears;
