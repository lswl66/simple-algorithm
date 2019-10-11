function getSameStr (str1, str2) {
    var sameStr = '';
    for (var i = 0; i< str1.length; i++) {
        if (str2.indexOf(str1[i]) != -1 
            && sameStr.indexOf(str1[i]) == -1) {
            sameStr += str1[i];
        }
    }
    return sameStr;
}
