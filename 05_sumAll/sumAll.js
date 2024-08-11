const sumAll = function(numStart, numEnd) {
    let sum = 0;
    if (typeof(numStart) !== "number" || typeof(numEnd) !== "number" || Math.floor(numStart) !== numStart || Math.floor(numEnd) !== numEnd || numStart < 0 || numEnd < 0) {
        return 'ERROR';
    }
    if (numEnd < numStart) {
        const temp = numStart;
        numStart = numEnd;
        numEnd = temp;
    }
    for (;numStart <= numEnd; numStart++) {
        sum += numStart;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
