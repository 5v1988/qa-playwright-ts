import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private get email(): Locator {
        return this.page.locator('#email');
    }

    private get password() {
        return this.page.locator('#pass');
    }

    private get loginBtn() {
        return this.page.locator('button.login');
    }

    async login(emailId: string, passWord: string) {
        await this.email.fill(emailId);
        await this.password.fill(passWord);
        await this.loginBtn.click();
    }

    async isLoginSuccess(timeOut: number = 5000) {
        // Using CSS with :visible to find only visible elements
        await expect(this.page.locator('span.logged-in:visible'))
            .toBeVisible({ timeout: timeOut });
    }
}
