function getTarget (arr,target) {
    var insideArr = arr;
    var x = target;
    var left = 0;
    var right = insideArr.length - 1;
    while ( left <= right) {
        if ((right+left)%2 == 0){
            if (x < insideArr[(right+left)/2]){
                right = (right+left)/2 - 1;
            }else if (x > insideArr[(right+left)/2]){
                left = (right+left)/2 + 1;
            }else{
                return (right+left)/2;
            }
        }else {
            if (x < insideArr[(right+left-1)/2]){
                right = (right+left-1)/2 - 1;
            }else if(x > insideArr[(right+left-1)/2]){
                left = (right+left-1)/2 + 1;
            }else {
                return (right+left-1)/2;
            }
        }
    }
    return -1;
}
var arr = [1,2,3,4,5,6,7,8,9];
getTarget(arr,1);
