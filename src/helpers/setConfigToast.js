import Swal from "sweetalert2";

export const setConfigToast = ({ showConfirmButton = false, timer = 3000, timerProgressBar = true }) => {
    return Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton,
        timer,
        timerProgressBar,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
    });
}