function removePunctuations(input) {
    var newString = [];
    for (let i = 0; i < input.length; i++) {
        if (
            (input[i] >= 'a' && input[i] <= 'z') ||
            (input[i] >= 'A' && input[i] <= 'Z') ||
            (input[i] >= '0' && input[i] <= '9')
        )
        newString.push(input[i]);
    }
    return newString;
}

const palindromes = function (input) {
    var half = Math.floor(input.length / 2);
    input = input.toLowerCase();
    input = removePunctuations(input);

    for (let i = 0; i < half; i++) {
        if (input[i] != input[input.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
