import {
    After,
    AfterAll,
    AfterStep,
    Before,
    BeforeAll,
    ITestCaseHookParameter,
    Status
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


After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
    if (result?.status !== Status.PASSED) {
        const image = await this.page?.screenshot({ fullPage: true });
        image && (this.attach(image, { 'mediaType': 'image/png' }));
    }
    await this.page?.close()
    await this.context?.close()
});

AfterAll(async function () {
    await browser.close()
});