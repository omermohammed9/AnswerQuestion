//Using Another translate library that is more modular
import translate from "translate";
import express from "express";
import cors from "cors";

translate.engine = "google"; // "google", "yandex", "libre", "deepl"
translate.key = process.env.APIKEY;
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors({origin: '*'}));

app.post(`/translate`, async (req, res) => {
    try {
        const { text, targetLanguage } = req.body;

        if (!text || !targetLanguage) {
            return res.status(400).json({ error: "Both 'text' and 'targetLanguage' are required." });
        }
        console.log(text);

        const translatedText = await translate(text, targetLanguage);
        res.json({ translatedText });
        console.log(translatedText)
    } catch (err) {
        res.status(500).json({ error: "An error occurred during translation." });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// ----------------------------------------------------------------
// translate.engine = "google"; // "google", "yandex", "libre", "deepl"
// translate.key = process.env.APIKEY;
//
// const text = await translate("Hello world", "fr");
// console.log(text);

// ----------------------------------------------------------------
// import translatte from "translatte";
// const t = `Remember to replace 'fr' with the desired target language code in the /translate route handler. You can now run your Express.js application using node app.js or node index.js (depending on your main file name) and access the /translate route to see the translated text in the response.`
// const test = translatte(t, {to: 'fr'}).then(res => {
//     console.log(res.text);
// }).catch(err => {
//     console.error(err);
// });
// export default test;