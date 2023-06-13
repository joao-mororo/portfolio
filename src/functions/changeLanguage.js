import { I18N_STORAGE_KEY } from "../data/Constants"

function changeLanguage() {
    let language = localStorage.getItem(I18N_STORAGE_KEY)

    if (language === 'en') {
        localStorage.setItem(I18N_STORAGE_KEY, 'pt')
    } else {
        localStorage.setItem(I18N_STORAGE_KEY, 'en')
    }

    window.location.reload(false)
}

export default changeLanguage