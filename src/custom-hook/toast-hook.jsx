import { toast } from "react-toastify";

export const useToast = () => {
    const showToast = (toastTheme, toastMsg) => {
        const notify = () => {
            toast[toastTheme](
                toastMsg, {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            )
        }
        notify()
    }
    return({ showToast });
}