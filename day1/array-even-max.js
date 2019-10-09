function getArrayMaxEven (arr){
    var l = arr.length;
    var i;
    var max = 0;
    for (i = 0; i < l; i++){
        if (arr[i] % 2 === 0){
            if (arr[i] > max){
                max = arr[i];
            }
        }
    }
    return max;
}
var a = [1,2,3,445,2333,444,5,324,43215445435]
getArrayMaxEven(a);
