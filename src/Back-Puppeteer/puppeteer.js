const express= require('express');
const puppeteer=require('puppeteer');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({origin: '*'}));

const WebScraping = async (url) => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto(url);
    // const text= await page.evaluate(()=> document.body.innerText);
   const paragraphs = await page.evaluate(() =>
        Array.from(document.querySelectorAll('p'), (e) =>e.innerText)
   );
    const h1 = await page.evaluate(() =>
        Array.from(document.querySelectorAll('h1'), (e) =>e.innerText)
    );
    const h2 = await page.evaluate(() =>
        Array.from(document.querySelectorAll('h2'), (e) =>e.innerText)
    );
    const h3 = await page.evaluate(() =>
        Array.from(document.querySelectorAll('h3'), (e) =>e.innerText)
    );
    const span = await page.evaluate(() =>
        Array.from(document.querySelectorAll('span'), (e) =>e.innerText)
    );
    const details = paragraphs.concat(h1).concat(h2).concat(h3).concat(span);
    const text = details.join('\n');
    return text;
}
app.post('/url', async (req,res)=>{
    const data = await WebScraping(req.body.url);
    return res.json(data);
})
app.listen(8080, ()=>{
    console.log("Port listeing to 8080");
})

