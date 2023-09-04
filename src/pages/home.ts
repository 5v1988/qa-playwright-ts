import { Locator, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class LandingPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    private get searchTextBox(): Locator {
        return this.page.locator('css=#search');
    }

    private get signIn(): Locator {
        return this.page.getByRole('link', { name: 'Sign In' });
    }

    private get createAnAccount(): Locator {
        return this.page.getByRole('link', { name: 'Create an Account' });
    }

    async navigateToSignInPage() {
        await this.signIn.click()
    }

    async navigateToNewAccountPage() {
        await this.createAnAccount.click();
    }

    async searchProduct(productName: string) {
        await this.searchTextBox.fill(productName);
        await this.searchTextBox.press('Enter');
    }

}