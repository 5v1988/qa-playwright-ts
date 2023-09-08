import { Then } from "@cucumber/cucumber";
import { CustomWorld } from "./core/custom.world";

Then('User reviews payments and places order', async function (this: CustomWorld) {
    await this.pages.paymentReviewPage.placeOrder();
});