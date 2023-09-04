import { Locator, Page } from "@playwright/test";

export default class BasePage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    get alert(): Locator {
        return this.page.locator("[role='alert']");
    }

    async getSuccessMessage() {
        return await this.alert.innerText();
    }

    async openUrl(baseUrl: string) {
        await this.page.goto(baseUrl);
    }

    async isTextDisplayed(text: string): Promise<boolean> {
        return await this.page.getByText(text, { exact: false })
            .isVisible();
    }
}

export const commonText = {
    accountCreation: 'Thank you for registering with Main Website Store.',
}