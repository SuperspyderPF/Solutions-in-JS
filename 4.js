var reverse = function(x) {
    let reversed = 0;
    while(x !== 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.trunc(x / 10);
    }
    if(reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)) {
        return 0;
    }
    return reversed;
};
