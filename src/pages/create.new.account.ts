import { expect, Page } from "@playwright/test";
import BasePage, { commonText } from "./base.page";

export default class NewAccountPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private get firstName() {
        return this.page.locator('#firstname');
    }

    private get lastName() {
        return this.page.locator('#lastname');
    }

    private get isSubscribed() {
        return this.page.locator('#is_subscribed');
    }

    private get email() {
        return this.page.locator('#email_address');
    }

    private get password() {
        return this.page.locator('#password');
    }

    private get confirmPassword() {
        return this.page.locator('#password-confirmation');
    }

    private get createAnAccount() {
        return this.page.getByRole('button', { name: 'Create an Account' });
    }

    async enterPersonalInfo(firstName: string, lastName: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
    }

    signUpNewsletter = async (subscribe: boolean) => {
        let state = await this.isSubscribed.isChecked();
        if (subscribe && !state) {
            await this.isSubscribed.check();
        }
    }

    enterSignInInfo = async (email: string, password: string, confirmPassword: string) => {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
    }

    createAccount = async () => {
        await this.createAnAccount.click();
        await expect(this.page.getByText(commonText.accountCreation))
            .toBeVisible({ timeout: 15000 });
    }

}