function search (arr, target) {
    var insideArr = arr;
    var x = target;
    var y = 0;
    for (var i = 0; i < insideArr.length; i++) {
        if (insideArr[i] == target) {
            break;
        }else{
            y += 1;
        }
    }
    if (y < insideArr.length){
        return i;
    }else{
        return -1;
    }
}
var arr = [1,2,3,4,5,6,7,8,9];
search(arr,1);
