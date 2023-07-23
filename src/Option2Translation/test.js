import translate from "translate";

translate.engine = "google"; // "google", "yandex", "libre", "deepl"
translate.key = "AIzaSyC-1DxVNl18bgVQjluBC2zM7ww8QnS6w28";

const text = await translate("Hello world", "ar");
console.log(text);



















// import translatte from "translatte";
//
//
// const t = `Remember to replace 'fr' with the desired target language code in the /translate route handler. You can now run your Express.js application using node app.js or node index.js (depending on your main file name) and access the /translate route to see the translated text in the response.`
// const test = translatte(t, {to: 'fr'}).then(res => {
//     console.log(res.text);
// }).catch(err => {
//     console.error(err);
// });
//
// export default test;