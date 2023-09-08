import { Then, When } from "@cucumber/cucumber";
import { randomNumber } from "../utils/common.util";
import { CustomWorld } from "./core/custom.world";

When('User navigates to create new customer account', async function (this: CustomWorld) {
    await this.pages.landingPage
        .navigateToNewAccountPage()
});

When('User enters personal info: {string} and {string}', async function (this: CustomWorld, firstName: string, lastName: string) {
    await this.pages.newAccountPage
        .enterPersonalInfo(firstName, lastName);
});

When('User checks the checkbox — Sign Up for Newsletter', async function (this: CustomWorld) {
    console.log('test1');
    await this.pages.newAccountPage
        .signUpNewsletter(true);
});

When('User enters sign-in info: {string} , {string} and {string}',
    async function (this: CustomWorld, email: string, password: string, confirmPassword: string) {
        email = email.replace('(random)', randomNumber().toString())
        await this.pages.newAccountPage
            .enterSignInInfo(email, password, confirmPassword);
    });

Then('User creates an account and confirms that it is successful',  async function (this: CustomWorld) {
    await this.pages.newAccountPage
        .createAccount();
});

