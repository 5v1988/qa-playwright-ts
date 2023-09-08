import { Then } from "@cucumber/cucumber";
import { CustomWorld } from "./core/custom.world";

Then('User verifies that order confirmation: {string} is displayed',
    async function (this: CustomWorld, message: string) {
        await this.pages.orderConfirmationPage
            .confirmSuccessMsg(message);
    });