const palindromes = function (phrase) {
    let cleanPhrase = phrase.replaceAll(',', '')
                            .replaceAll('.', '')
                            .replaceAll(`'`, '')
                            .replaceAll(' ', '')
                            .replaceAll('!', '')
                            .toLowerCase();
    for (let i = 0; i < cleanPhrase.length / 2; i++) {
        if (cleanPhrase.at(i) !== cleanPhrase.at(-i - 1)) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
