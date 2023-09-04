import {
    After,
    AfterAll,
    Before,
    BeforeAll
} from "@cucumber/cucumber";
import {
    Browser,
    chromium,
    devices
} from "@playwright/test";
import { ICustomWorld } from "./custom.world";
import PageFactory from "./page.factory";
let browser: Browser;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
});

Before(async function (this: ICustomWorld) {
    this.context = await browser.newContext(devices['Desktop Chrome']);
    this.page = await this.context.newPage();
    this.pageFactory = new PageFactory(this.page);
});

After(async function (this: ICustomWorld) {
    await this.page?.close()
    await this.context?.close()
});

AfterAll(async function () {
    await browser.close()
});