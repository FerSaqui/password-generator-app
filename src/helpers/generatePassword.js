import { getLowercaseLetter, getNumber, getSymbol, getUppercaseLetter } from "./charactersForPassword";

export const generatePassword = (
    {
        lengthPassword,
        numberSelectedOptions,
        uppercaseLetters,
        lowercaseLetters,
        numbers,
        symbols
    }
) => {
    let password = ``;
    let countOptionsCompleted = 0;

    let countUppercaseLetter = 0;
    let countLowercaseLetter = 0;
    let countNumber = 0;
    let countSymbol = 0;

    let selectedForGenerate;

    while(password.length < lengthPassword){
        if (countOptionsCompleted === numberSelectedOptions) {
            countUppercaseLetter = 0;
            countLowercaseLetter = 0;
            countNumber = 0;
            countSymbol = 0;
            countOptionsCompleted = 0;
        }

        selectedForGenerate = Boolean(Math.round(Math.random()));
        if (uppercaseLetters && countUppercaseLetter === 0 && selectedForGenerate) {
            countUppercaseLetter = 1;
            countOptionsCompleted += 1;
            password += getUppercaseLetter();
            continue;
        }

        selectedForGenerate = Boolean(Math.round(Math.random()));
        if (lowercaseLetters && countLowercaseLetter === 0 && selectedForGenerate) {
            countLowercaseLetter = 1;
            countOptionsCompleted += 1;
            password += getLowercaseLetter();
            continue;
        }

        selectedForGenerate = Boolean(Math.round(Math.random()));
        if (numbers && countNumber === 0 && selectedForGenerate) {
            countNumber = 1;
            countOptionsCompleted += 1;
            password += getNumber();
            continue;
        }

        selectedForGenerate = Boolean(Math.round(Math.random()));
        if (symbols && countSymbol === 0 && selectedForGenerate) {
            countSymbol = 1;
            countOptionsCompleted += 1;
            password += getSymbol();
            continue;
        }
    }
    return password;
}