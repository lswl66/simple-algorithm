function getTarget (arr,target) {
    var left = 0;
    var right = arr.length - 1;
    while ( left <= right) {
        var mid = Math.ceil((left + right) / 2);
        if (target < arr[mid]){
            right = mid - 1;
        }else if (target > arr[mid]){
            left = mid + 1;
        }else{
            return mid;
        }
    }
    return -1;
}
var arr = [1,2,3,4,5,6,7,8];
getTarget(arr,1);
