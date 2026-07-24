const removeFromArray = function(array, ...element) {
    
   

 // the reason why this doesnt work is cause, pop doesnt remove specific items, for each starts from the top so when you remove an array, it will break
    // array.forEach((item) => {
    //     if (element.includes(item)){
    //         array.pop(item);
    //     }
        
    // });
    // return array;


    return array.filter(item => !element.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
