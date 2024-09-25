import { useDispatch, useSelector } from "react-redux"
import { onAddPassword, onCalculateNumberSelectedOptions, onSetLengthPassword, onSetSelectedOption } from "../store/password/passwordSlice";
import { getLowercaseLetter, getNumber, getSymbol, getUppercaseLetter } from "../helpers/charactersForPassword";

export const usePasswordGenerator = () => {
    const {
        lengthPassword,
        optionsForGenerate,
        numberSelectedOptions,
        newPasswords,
    } = useSelector(state => state.password);

    const dispatch = useDispatch();

    const setLengthPassword = ({ lengthPassword }) => {
        dispatch(onSetLengthPassword(lengthPassword));
    }

    const setSelectedOptions = ({ option, value }) => {
        dispatch(onSetSelectedOption({ option, value }));
    }

    const calculateNumberSelectedOptions = () => {
        dispatch(onCalculateNumberSelectedOptions());
    }

    const generatePasswords = () => {
        let generatedPassword = "";
        let countOptionsCompleted = 0;

        let countUppercaseLetter = 0;
        let countLowercaseLetter = 0;
        let countNumber = 0;
        let countSymbol = 0;

        let selectedForGenerate;

        while(generatedPassword.length < lengthPassword){
            if (countOptionsCompleted === numberSelectedOptions) {
                countUppercaseLetter = 0;
                countLowercaseLetter = 0;
                countNumber = 0;
                countSymbol = 0;
                countOptionsCompleted = 0;
            }

            selectedForGenerate = Boolean(Math.round(Math.random()));
            if (optionsForGenerate.uppercaseLetters && countUppercaseLetter === 0 && selectedForGenerate) {
                countUppercaseLetter = 1;
                countOptionsCompleted += 1;
                generatedPassword += getUppercaseLetter();
                continue;
            }

            selectedForGenerate = Boolean(Math.round(Math.random()));
            if (optionsForGenerate.lowercaseLetters && countLowercaseLetter === 0 && selectedForGenerate) {
                countLowercaseLetter = 1;
                countOptionsCompleted += 1;
                generatedPassword += getLowercaseLetter();
                continue;
            }

            selectedForGenerate = Boolean(Math.round(Math.random()));
            if (optionsForGenerate.numbers && countNumber === 0 && selectedForGenerate) {
                countNumber = 1;
                countOptionsCompleted += 1;
                generatedPassword += getNumber();
                continue;
            }

            selectedForGenerate = Boolean(Math.round(Math.random()));
            if (optionsForGenerate.symbols && countSymbol === 0 && selectedForGenerate) {
                countSymbol = 1;
                countOptionsCompleted += 1;
                generatedPassword += getSymbol();
                continue;
            }
        }
        dispatch(onAddPassword(generatedPassword));
    }

    return {
        //Properties
        lengthPassword,
        newPasswords,
        numberSelectedOptions,
        optionsForGenerate,

        //Methods
        calculateNumberSelectedOptions,
        generatePasswords,
        setLengthPassword,
        setSelectedOptions,
    }
}