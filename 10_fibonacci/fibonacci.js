const fibonacci = function(num) {
    if (num < 0) { 
        return "OOPS";
    }

    let num1 = -1;
    let num2 = 1;
    let sum = num1 + num2;

    for (let i = 1; i <= num; i++) {
        num1 = num2;
        num2 = sum;
        sum = num1 + num2;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;

//  -1 1 0 1 1 2 3 5 8