const repeatString = function(str, num) {
    if(num==0){
        return("");
    } else if(num<0){
        return "ERROR";
    }
    
    let strR = "";
    for(i=0; i<num; i++){
        strR = strR + str; 
    }
    return(strR)
};

module.exports = repeatString;
