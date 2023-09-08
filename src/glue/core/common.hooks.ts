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
    chromium
} from "@playwright/test";
import { CustomWorld } from "./custom.world";
let browser: Browser;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
});

Before({ tags: "@Ignore or @ignore" }, async function (tcHook: ITestCaseHookParameter) {
    this.log(`The scenario: <b> ${tcHook.pickle.name} </b> is being skipped`);
    return 'skipped';
});

Before(async function (this: CustomWorld) {
    await this.setUp(browser);
    await this.initPages();
});

AfterStep(async function (this: CustomWorld, { result }: ITestStepHookParameter) {
    if (result?.status !== Status.PASSED) {
        const imageBuffer = await this.pwPage.screenshot({ fullPage: true });
        imageBuffer && (this.attach(imageBuffer, { 'mediaType': 'image/png' }));
    }
});

After(async function (this: CustomWorld) {
    await this.tearDown();
});

AfterAll(async function () {
    await browser.close()
});