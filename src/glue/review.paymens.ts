import { Then } from "@cucumber/cucumber";
import { ICustomWorld } from "./util/custom.world";

Then('User reviews payments and places order', async function (this: ICustomWorld) {
    await this.pageFactory?.paymentReviewPage.placeOrder();
});