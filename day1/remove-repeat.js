function getNoRepeatArr (arr) {
    var insideArr = arr;
    var noRepeatArr = [];
    var i;
    var a;
    var l = insideArr.length;
    for (i = 0; i < l; i++) {
        a = insideArr.shift();
       if (insideArr.indexOf(a) == -1) {
           noRepeatArr.push(a);
       }
    }
    return noRepeatArr;
}
var arr = [1,2,2,3,1,3,2,3,4,5,5,3,4];
getNoRepeatArr(arr);
