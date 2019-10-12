function getFiboracciNum(num) {
    //var fiboracciArr = [];
    var fiboracciNum;
    if(num <= 2 && num > 0){
        fiboracciNum = 1;
        // fiboracciArr.unshift(fiboracciNum);
        //num--;
    }
    if(num > 2){
        fiboracciNum = getFiboracci(num-1) + getFiboracci(num-2); 
       // num--;
    }
    return fiboracciNum;
} 
function getFiboracciArr(num) {
    var fiboracciArr = [];
    while (num > 0){
        fiboracciArr.unshift(getFiboracciNum(num));
        num--;
    }
    return fiboracciArr;
}
