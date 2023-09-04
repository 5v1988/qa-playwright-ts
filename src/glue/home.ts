import { Given } from "@cucumber/cucumber";
import { readTestConfig } from "../utils/common.util";
import { ICustomWorld } from "./util/custom.world";

Given('User opens home page', async function (this: ICustomWorld) {
    let url: string = await readTestConfig('url')
    await this.pageFactory?.landingPage.openUrl(url);
});
