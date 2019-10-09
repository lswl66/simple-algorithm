function getArrayMax (arr){
    var l = arr.length;
    var i;
    var max = arr[0];
    for (i = 1; i < l; i++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
var a = [1, 2333, 234, 123, 3, 43, 35, 2];
getArrayMax(a);
