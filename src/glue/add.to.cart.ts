import { When } from "@cucumber/cucumber";
import { ICustomWorld } from "./util/custom.world";

When('User adds choosen product to the cart', async function (this: ICustomWorld) {
   await this.pageFactory?.addToCart.addProductToCart();
});

When('User proceeds to checkout from the cart', async function (this: ICustomWorld) {
    await this.pageFactory?.addToCart.proceedCheckout();
});