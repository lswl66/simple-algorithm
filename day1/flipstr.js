function getFlipStr (string) {
    var fliparr = [];
    for (var i = string.length - 1; i >= 0; i--) {
        fliparr.push(string[i]);
    }
    return fliparr.join('');
}
