import React, { useState } from 'react'
import { generateRandomNumber } from '../helpers/GenerateRandomNumber';
import { getLowercaseLetter, getNumber, getSymbol, getUppercaseLetter } from '../helpers/charactersForPassword';

export const PasswordGeneratorApp = () => {
    const [passwordSettings, setPasswordSettings] = useState({
        lengthPassword: 3,
        uppercaseLetters: true,
        lowercaseLetters: true,
        numbers: false,
        symbols: true
    });

    const [numberOptionsChoosed, setNumberOptionsChoosed] = useState(3);

    const onGeneratePassword = () => {
        let newPassword = "";
        let countOptionsCompleted = 0;

        let countUppercaseLetter = 0;
        let countLowercaseLetter = 0;
        let countNumber = 0;
        let countSymbol = 0;

        let selectedForGenerate;

        while(newPassword.length < passwordSettings.lengthPassword){
            if (countOptionsCompleted === numberOptionsChoosed) {
                countUppercaseLetter = 0;
                countLowercaseLetter = 0;
                countNumber = 0;
                countSymbol = 0;
                countOptionsCompleted = 0;
            }

            selectedForGenerate = Boolean(Math.round(Math.random()));
            if (passwordSettings.uppercaseLetters && countUppercaseLetter === 0 && selectedForGenerate) {
                countUppercaseLetter = 1;
                countOptionsCompleted += 1;
                newPassword += getUppercaseLetter();
                continue;
            }

            selectedForGenerate = Boolean(Math.round(Math.random()));
            if (passwordSettings.lowercaseLetters && countLowercaseLetter === 0 && selectedForGenerate) {
                countLowercaseLetter = 1;
                countOptionsCompleted += 1;
                newPassword += getLowercaseLetter();
                continue;
            }

            selectedForGenerate = Boolean(Math.round(Math.random()));
            if (passwordSettings.numbers && countNumber === 0 && selectedForGenerate) {
                countNumber = 1;
                countOptionsCompleted += 1;
                newPassword += getNumber();
                continue;
            }

            selectedForGenerate = Boolean(Math.round(Math.random()));
            if (passwordSettings.symbols && countSymbol === 0 && selectedForGenerate) {
                countSymbol = 1;
                countOptionsCompleted += 1;
                newPassword += getSymbol();
                continue;
            }
        }
        console.log(newPassword);
    }

    return (
        <>
            <button onClick={onGeneratePassword}>Generate password</button>
        </>
    )
}