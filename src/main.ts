import * as puppeteer from "puppeteer";
import Server from "./server";

const launchOptions: puppeteer.BrowserLaunchArgumentOptions = {
    headless: true,
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

    const target = await Server.getObj();
    console.log(`${target.hp}, ${target.url}, ${target.loginUser.user}, ${target.loginUser.password}`);
    await browser.close();
    console.log("end");
})();