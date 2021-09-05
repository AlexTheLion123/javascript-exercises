const removeFromArray = function(array, ...args) {
    let arr = new Array();
    let contains;
    let len = array.length;
    
    for(i=0;i<len; i++){
        debugger;
        contains = false;
        for(j=0; j<args.length; j++){
            if(array[i]==args[j] && typeof(array[i])==typeof(args[j])){
                contains = true;
                break;
            }
        }

        if(contains==false){
            arr.push(array[i]);
        }

    }

    return arr;
};
console.log(removeFromArray([1,2,3,4],"3"))
module.exports = removeFromArray;
