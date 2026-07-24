const repeatString = function(string, repeat) {
    if (repeat < 0){
        return 'ERROR';
    }
    let i = 0;
    let outputString = '';
    while (i < repeat){
        outputString += string;
        i++;
    }
    return outputString;
};


// Do not edit below this line
module.exports = repeatString;
