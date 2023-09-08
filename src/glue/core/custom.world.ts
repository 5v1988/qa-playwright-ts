import {
    IWorldOptions,
    setDefaultTimeout,
    setWorldConstructor,
    World
} from "@cucumber/cucumber";
import {
    Browser,
    BrowserContext,
    devices,
    Page
} from "@playwright/test";
import PageFactory from "./page.factory";

export class CustomWorld extends World{
    context!: BrowserContext;
    pwPage!: Page;
    pages!: PageFactory;

    constructor(options: IWorldOptions) {
        super(options)
    }

    async setUp(browser: Browser) {
        this.context = await browser.newContext(devices['Desktop Chrome']);
        this.pwPage = await this.context.newPage();
    }

    async initPages() {
        this.pages = new PageFactory(this.pwPage);
    }

    async tearDown() {
        await this.pwPage.close()
        await this.context?.close()
    }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(30 * 1000);