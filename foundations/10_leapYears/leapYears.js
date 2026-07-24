const leapYears = function(year) {
    //set the parameter to determine leapyear

    //leap years are always divisible by 4
    //years that are divisible by 100, are not leap years unless its divisible by 400

    const isYearDivisibleByFour = year % 4 === 0;
    const isYearCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    if  (isYearDivisibleByFour && (isYearDivisibleByFourHundred || !isYearCentury)){
        return true;
    }
    else{
        return false;
    }
};
// Do not edit below this line
module.exports = leapYears;
