const sumAll = function(num1, num2) {
    // If the function receives invalid arguments (such as negative numbers, non-integers, strings etc. - anything other than positive integers), it should return the string `'ERROR'`.
    let min;
    let max;
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    
    else if (num1 <= num2){
        min = num1;
        max = num2;
    }
    else{
        min = num2;
        max = num1;
    }
    let sum;
    for (sum = 0;min <= max;min++){
        sum += min;
    }

    return sum;

}
// Do not edit below this line
module.exports = sumAll;
