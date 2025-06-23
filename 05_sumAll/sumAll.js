const sumAll = function(lowerLimit, upperLimit) {
    if (!Number.isInteger(lowerLimit) || !Number.isInteger(upperLimit)) return "ERROR";
    if (lowerLimit < 0 || upperLimit < 0) return "ERROR";
    if (lowerLimit > upperLimit) {
      const temp = lowerLimit;
      lowerLimit = upperLimit;
      upperLimit = temp;
    }

    let sum = 0;
    while (lowerLimit <= upperLimit) {
        sum += lowerLimit++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
