function bubbleSort(arr) {
    var temp;
    for (var i = arr.length-1; i > 0; i--) {
        for (var j = 0; j < i ; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return (arr);
}

