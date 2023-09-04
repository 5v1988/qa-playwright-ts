import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class OrderConfirmationPage extends BasePage{
    constructor(page: Page){
        super(page);
    }
    private get pageTitle() {
        return this.page.locator('h1.page-title');
    }

    private get orderSuccess() {
        return this.page.locator('.checkout-success');
    }

    async confirmSuccessMsg(message: string) {
        await this.orderSuccess.waitFor({'state': 'visible'});
        expect(await this.isTextDisplayed(message)).toBeTruthy();
    }
}