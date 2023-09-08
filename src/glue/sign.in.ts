import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "./core/custom.world";

When('User navigates to sign-in page', async function (this: CustomWorld) {
    await this.pages.landingPage
        .navigateToSignInPage();
});

When('User logons using credentials: {string} and {string}', async function (this: CustomWorld, email: string, password: string) {
    await this.pages.loginPage
        .login(email, password);
});

Then('User verifies that the login is successful', async function (this: CustomWorld) {
    await this.pages.loginPage
        .isLoginSuccess(this.parameters.timeOut);
});