function getSecondMax(arr) {
    var noRepeatArr = [];
    //先去重
    for (var i = 0 ; i < arr.length; i++) {
        if (noRepeatArr.indexOf(arr[i]) == -1) {
            noRepeatArr.push(arr[i]);
        }
    }
    var theMax;
    var theSecondMax;
    //再把数组前两个大的给max 小的给secondmax 
    if (noRepeatArr[0] < noRepeatArr[1]) {
        theMax = noRepeatArr[1];
        theSecondMax = noRepeatArr[0];
    }else {
        theMax = noRepeatArr[0];
        theSecondMax = noRepeatArr[1];
    }
    //遍历去重后的数组 比max大的给max max给secondmax
    for (var j = 2; j < noRepeatArr.length; j++) {
        if (theMax < noRepeatArr[j]) {
            theSecondMax = theMax;
            theMax = noRepeatArr[j];
        }else if (theSecondMax < noRepeatArr[j]) {
            theSecondMax = noRepeatArr[j];
        }
    }
    return theSecondMax;
}
