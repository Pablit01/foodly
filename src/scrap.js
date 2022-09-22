const puppeter = require('puppeteer');

async function webScrap(url){
    const browser = await puppeter.launch();
    const page = await browser.newPage();
    await page.goto(url);


    const[el] = await page.$x('//*[@id="section-menu-poniedzialek"]/div/div[2]/ul/li/div/div/div[1]/div[2]/span');
    const text = await el.getProperty('textContent');
    const hue = await text.jsonValue();

    browser.close();

    console.log(hue);
}

webScrap('https://www.edenwzaczku.pl/restauracja/eden-w-zaczku#menu-poniedzialek');