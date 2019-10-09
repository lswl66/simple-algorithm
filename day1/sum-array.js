function getArraySum (arr){
    var l = arr.length;
    var sum = 0;
    var i;
    for (i = 1; i < l; i++){
        sum += arr[i];
    }
    return sum;
}
var a = [1, 2333, 234, 123, 6, 43, 35, 2];
getArraySum(a);

