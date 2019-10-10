function search (arr, target) {
    var insideArr = arr;
    var x = target;
    for (var i = 0; i < insideArr.length; i++) {
        if (insideArr[i] == x) {
            return i;
        }
    }
    return -1;
}
var arr = [1,2,3,4,5,6,7,8,9];
search(arr,1);
