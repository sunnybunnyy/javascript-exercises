const removeFromArray = function(array, ...elementsToRemove) {
    let newArray = [];
    arrayLoop: for(let i = 0; i < array.length; i++) {
        const element = array[i];
        for(const elementToRemove of elementsToRemove) {
            if(element === elementToRemove) {
                continue arrayLoop;
            }
        }
        newArray.push(element);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
