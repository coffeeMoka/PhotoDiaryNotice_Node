import * as puppeteer from "puppeteer";
import Cast from "./models/cast"
import { serv } from "./server";

console.log("Hello, world");
serv();
console.log(Cast.name);

const launchOptions: puppeteer.BrowserLaunchArgumentOptions = {
    headless: false,
    args: [
        "--no-sandbox",
        "--disable-setuid-sandbox"
    ]
};

const waitOptions: puppeteer.WaitForOptions = {
    waitUntil: ["domcontentloaded", "networkidle0"]
};

(async () => {
    const browser: puppeteer.Browser = await puppeteer.launch(launchOptions);
    const page: puppeteer.Page = await browser.newPage();
    await page.goto("https://www.google.com/", waitOptions);

    await browser.close();
    console.log("end");
})();