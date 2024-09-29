import { lowercaseLetters, numbers, symbols, uppercaseLetters } from "../fixtures/ElementsPassword";
import { generateRandomNumber } from "./generateRandomNumber"

export const getUppercaseLetter = () => {
    const position = generateRandomNumber({ min: 0, max: 25 });
    return uppercaseLetters[position];
};

export const getLowercaseLetter = () => {
    const position = generateRandomNumber({ min: 0, max: 25 });
    return lowercaseLetters[position];
};

export const getNumber = () => {
    const position = generateRandomNumber({ min: 0, max: 9 });
    return numbers[position];
};

export const getSymbol = () => {
    const position = generateRandomNumber({ min: 0, max: 31 });
    return symbols[position];
};