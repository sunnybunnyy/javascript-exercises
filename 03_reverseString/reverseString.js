const reverseString = function(string) {
    for (let i = string.length; i > 0; i--) {
        const firstLetter = string[0];
        const toBeReveresed = string.slice(1, i);
        const reversed = string.slice(i);
        string = toBeReveresed + firstLetter + reversed;
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
