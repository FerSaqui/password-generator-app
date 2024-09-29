import { useDispatch, useSelector } from "react-redux"
import { onAddPassword, onSetPasswordForValidate } from "../store/password/passwordSlice";
import { validatePasswordStrength } from "../helpers/validatePasswordStrength";

export const usePasswordValidate = () => {
    const { passwordForValidate: password } = useSelector( state => state.password );
    const dispatch = useDispatch();

    const setPasswordForValidate = ({ password }) => {
        dispatch(onSetPasswordForValidate(password));
    }

    const startValidatePassword = () => {
        let text = "";
        text = text.padStart(password.length, "*");

        const strengthPasswordInfo = validatePasswordStrength({ password });
        strengthPasswordInfo.password = text;
        dispatch(onAddPassword([ strengthPasswordInfo ]));
    }

    const startClearData = () => {
        dispatch(onAddPassword([]));
        dispatch(onSetPasswordForValidate(""));
    }

    return {
        //*Properties
        password,

        //*Methods
        setPasswordForValidate,
        startValidatePassword,
        startClearData,
    }
}