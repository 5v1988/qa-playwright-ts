import { Then } from "@cucumber/cucumber";
import { ICustomWorld } from "./util/custom.world";

Then('User verifies that order confirmation: {string} is displayed',
    async function (this: ICustomWorld, message: string) {
        await this.pageFactory?.orderConfirmationPage
            .confirmSuccessMsg(message);
    });