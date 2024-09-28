import { useDispatch, useSelector } from "react-redux"
import { onFinishLoadingPasswords, onInitLoadingPasswords } from "../store/ui/uiSlice";

export const useUiStore = () => {
    const { isLoadingPasswords } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const initLoadingPasswords = () => {
        dispatch(onInitLoadingPasswords());
    }

    const finishLoadingPasswords = () => {
        dispatch(onFinishLoadingPasswords());
    }

    return {
        //*Properties
        isLoadingPasswords,

        //*Methods
        initLoadingPasswords,
        finishLoadingPasswords
    }
}