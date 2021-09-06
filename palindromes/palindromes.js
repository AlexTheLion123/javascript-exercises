const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    str = str.replace(" ", "");

    tempArr = str.split('');
    tempArr = tempArr.filter(item => item != " " );
    arr = tempArr.map(item => item.toLowerCase());
    orig = arr.join("");
    
    let reverse = [];
    for(let i = arr.length-1; i>=0; i--){
        reverse.push(arr[i]);
    }
    
    const answer = reverse.join("");
    return answer == orig;
};

palindromes("Hellothere AdsfkjD")

module.exports = palindromes;
