import { useDispatch, useSelector } from "react-redux"
import { onAddPassword, onCalculateNumberSelectedOptions, onClearPasswords, onSetLengthPassword, onSetPasswordForValidate, onSetSelectedOption } from "../store/password/passwordSlice";
import { setConfigToast } from "../helpers/setConfigToast";
import { generatePassword } from "../helpers/generatePassword";
import { validatePasswordStrength } from "../helpers/validatePasswordStrength";

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

    const startGeneratePasswords = () => {
        const bodyToast = {};
        let arrayNewPasswords = [];
        
        if(lengthPassword < 1 || isNaN(lengthPassword)){
            bodyToast.icon = "error";
            bodyToast.title = "Ingresar longitud de contraseña válida";
        }

        if(numberSelectedOptions < 1){
            bodyToast.icon = "error";
            bodyToast.title = "Seleccionar al menos una opción";
        }

        if(Object.keys(bodyToast).length > 0){
            const toast = setConfigToast({ showConfirmButton: false, timer: 3000, timerProgressBar: false });
            toast.fire(bodyToast);
            return;
        }

        dispatch(onClearPasswords());
        for (let index = 0; index < 5; index++) {
            const password = generatePassword({ lengthPassword, numberSelectedOptions, ...optionsForGenerate });
            const passwordAndInfo = validatePasswordStrength({ password });
            arrayNewPasswords.push(passwordAndInfo);
        }

        dispatch(onAddPassword(arrayNewPasswords));
    }

    const startClearData = () => {
        dispatch(onAddPassword([]));
        dispatch(onSetPasswordForValidate(""));
    }

    return {
        //Properties
        lengthPassword,
        newPasswords,
        numberSelectedOptions,
        optionsForGenerate,

        //Methods
        calculateNumberSelectedOptions,
        startGeneratePasswords,
        setLengthPassword,
        setSelectedOptions,
        startClearData,
    }
}