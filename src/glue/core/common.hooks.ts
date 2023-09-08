import {
    After,
    AfterAll,
    AfterStep,
    Before,
    BeforeAll,
    ITestCaseHookParameter,
    ITestStepHookParameter,
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

Before({ tags: "@Ignore or @ignore" }, async function (this: ICustomWorld, tcHook: ITestCaseHookParameter) {
    this.log(`The scenario: <b> ${tcHook.pickle.name} </b> is being skipped`);
    return 'skipped';
});

Before(async function (this: ICustomWorld) {
    this.context = await browser.newContext(devices['Desktop Chrome']);
    this.page = await this.context.newPage();
    this.pageFactory = new PageFactory(this.page);
});

AfterStep(async function (this: ICustomWorld, { result }: ITestStepHookParameter) {
    if (result?.status !== Status.PASSED) {
        const imageBuffer = await this.page?.screenshot({ fullPage: true });
        imageBuffer && (this.attach(imageBuffer, { 'mediaType': 'image/png' }));
    }
});

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
    await this.page?.close()
    await this.context?.close()
});

AfterAll(async function () {
    await browser.close()
});