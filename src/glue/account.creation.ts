import { Then, When } from "@cucumber/cucumber";
import { randomNumber } from "../utils/common.util";
import { ICustomWorld } from "./util/custom.world";

When('User navigates to create new customer account', async function (this: ICustomWorld) {
    await this.pageFactory?.landingPage
        .navigateToNewAccountPage()
});

When('User enters personal info: {string} and {string}', async function (this: ICustomWorld, firstName: string, lastName: string) {
    await this.pageFactory?.newAccountPage
        .enterPersonalInfo(firstName, lastName);
});

When('User checks the checkbox — Sign Up for Newsletter', async function (this: ICustomWorld) {
    console.log('test1');
    await this.pageFactory?.newAccountPage
        .signUpNewsletter(true);
});

When('User enters sign-in info: {string} , {string} and {string}',
    async function (this: ICustomWorld, email: string, password: string, confirmPassword: string) {
        email = email.replace('(random)', randomNumber().toString())
        await this.pageFactory?.newAccountPage
            .enterSignInInfo(email, password, confirmPassword);
    });

Then('User creates an account and confirms that it is successful',  async function (this: ICustomWorld) {
    await this.pageFactory?.newAccountPage
        .createAccount();
});

