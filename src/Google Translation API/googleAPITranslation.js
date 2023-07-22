import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3000; // Choose a suitable port number
app.use(express.json());
app.use(cors({origin: '*'}));

app.post('/translate', async (req, res) => {
    const { text, targetLanguage } = req.body;
    const apiKey = 'AIzaSyCEdCUnms26B6jv6fwq5MWv1A5Ji8fSlUY';
    const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

    //console.log("text", text);
    try {
        const response = await fetch(`${apiUrl}?q=${encodeURIComponent(text)}&target=${targetLanguage}&key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data.error) {
            throw new Error(`Translation failed: ${data.error.message}`);
        }
        const translatedText = data.data.translations[0].translatedText;
        res.json({ translatedText });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during translation.' });
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});




















// // Function to translate text using the Google Translate API
// async function translateText(text, targetLanguage) {
//     const apiKey = 'AIzaSyCEdCUnms26B6jv6fwq5MWv1A5Ji8fSlUY';
//     const apiUrl = 'https://translation.googleapis.com/language/translate/v2';
//
//     const response = await fetch(`${apiUrl}?q=${encodeURIComponent(text)}&target=${targetLanguage}&key=${apiKey}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//
//     const data = await response.json();
//     if (data.error) {
//         throw new Error(`Translation failed: ${data.error.message}`);
//     }
//
//     return data.data.translations[0].translatedText;
// }
//
// const textToTranslate = 'Elizabeth II (Elizabeth Alexandra Mary; 21 April 1926 – 8 September 2022) was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states during her lifetime and remained the monarch of 15 realms by the time of her death. Her reign of over 70 years is the longest of any British monarch and the longest verified reign of any female head of state in history.';
// const targetLanguage = 'fr'; // Target language code (e.g., 'fr' for French)
// translateText(textToTranslate, targetLanguage)
//     .then(translatedText => {
//         console.log(`Translated text: ${translatedText}`);
//     })
//     .catch(error => {
//         console.error(error);
//     });
