import zxcvbn from "zxcvbn"

export const validatePasswordStrength = ({ password }) => {
    const information = zxcvbn(password);
    return {
        password,
        crack_times_display: information.crack_times_display,
        score: information.score
    }
}