import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class AddToCartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private get addToCart(): Locator {
        return this.page.locator("css=button[title='Add to Cart']");
    }

    private get quantity() {
        return this.page.locator('css=#qty');
    }

    private get cartCounter() {
        return this.page.locator('css=a.showcart span.counter');
    }

    private get proceedToCheckout() {
        return this.page.getByRole('button',{'name': 'Proceed to Checkout'});
    }

    private get viewAndEditCart() {
        return this.page.locator("xpath=//a[.//span[text()='View and Edit Cart']]");
    }

    async addProductToCart() {
        await this.addToCart.first().click();
        await this.cartCounter.waitFor({'state': 'visible'});
    }

    async proceedCheckout(count = '1') {
        await this.cartCounter.filter({'hasText': count}).click();
        await this.proceedToCheckout.click();
    }
}