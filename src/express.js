// Server express.js używany do web scrapingu zapomocą biblioteki puppeteer. Uruchaminy komendą 'npm run exserve'.

const PORT = 8000;
const express = require('express')
const app = express();
const puppeter = require('puppeteer');
const cors = require('cors');

app.use(cors());

let dzienTygodnia = new Date().getDay();
const dniTygodnia = ['menu-stale', 'poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek', 'menu-stale'];
let licz = dniTygodnia[dzienTygodnia];

app.get('/zaczek', (req, res) => {

    async function webScrap(url){
        const browser = await puppeter.launch();
        const page = await browser.newPage();
        await page.goto(url);
    
        const[el] = await page.$x(`//*[@id="section-menu-${licz}"]/div/div[2]/ul/li/div/div/div[1]/div[2]/span`);
        const text = await el.getProperty('textContent');
        const hue = await text.jsonValue();
        browser.close();
    
        res.json(hue);
    }
    webScrap(`https://www.edenwzaczku.pl/restauracja/eden-w-zaczku#menu-${licz}`);
})

app.listen(PORT, () => console.log('hue'))