import { toast } from "react-toastify";
import { DEFAULT_TOAST_CONFIG } from "../components/Constants";
import { i18n } from "../translate/i18n";

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.info(i18n.t('sidebar.toast_user'), DEFAULT_TOAST_CONFIG)
}

export default copyToClipboard