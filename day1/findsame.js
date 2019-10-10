function getSameNumber (arr1,arr2) {
    var insideArr1 = arr1;
    var insideArr2 = arr2;
    var finallyArr = [];
    for (var i = 0; i < insideArr1.length; i++) {
        if (insideArr2.indexOf(insideArr1[i]) != -1 
            && finallyArr.indexOf(insideArr1[i]) == -1){
            finallyArr.push(insideArr1[i]);
        }
    }
    return finallyArr;
}

var arr1 = [1,2,3,4,5,6,7,3,2,1];
var arr2 = [2,4,6,7,1,43,6]
getSameNumber(arr1,arr2);
