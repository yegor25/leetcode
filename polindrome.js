/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x.toString().split("").reverse().join("") === x.toString() && x >= 0){
        return true
    } else { return false}
 };