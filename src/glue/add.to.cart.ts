import { When } from "@cucumber/cucumber";
import { CustomWorld } from "./core/custom.world";

When('User adds choosen product to the cart', async function (this: CustomWorld) {
   await this.pages.addToCart.addProductToCart();
});

When('User proceeds to checkout from the cart', async function (this: CustomWorld) {
    await this.pages.addToCart.proceedCheckout();
});