import axios from "axios";

const translate = async (targetLanguage, displayedContent, translatedtxt, selectedLanguage) => {
    const selectedLanguageCode = targetLanguage.value.find((language) => language.id === selectedLanguage.value)?.id;
    try {
        const response = await axios.post('http://localhost:3000/translate', {
            text: displayedContent.value,
            targetLanguage: selectedLanguageCode,
        });
        translatedtxt.value = await response.data.translatedText;
    } catch (error) {
        console.error(error);
    }
};
export default translate;