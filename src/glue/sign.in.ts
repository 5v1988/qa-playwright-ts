import { Then, When } from "@cucumber/cucumber";
import { ICustomWorld } from "./util/custom.world";

When('User navigates to sign-in page', async function (this: ICustomWorld) {
    await this.pageFactory?.landingPage
        .navigateToSignInPage();
});

When('User logons using credentials: {string} and {string}', async function (this: ICustomWorld, email: string, password: string) {
    await this.pageFactory?.loginPage
        .login(email, password);
});

Then('User verifies that the login is successful', async function (this: ICustomWorld) {
    await this.pageFactory?.loginPage
        .isLoginSuccess();
});