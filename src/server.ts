import { readFileSync } from "fs";
import { ScrapingTarget, LoginUser, Cast } from "./models/scrapingtargetlist";

export default class Server {
    static async getObj() {
        const jsonText = readFileSync("./config.json", "utf-8");
        const targets = JSON.parse(jsonText) as ScrapingTarget;
        return targets;
    }
}