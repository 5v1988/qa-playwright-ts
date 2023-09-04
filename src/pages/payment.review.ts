import { Page } from "@playwright/test";
import BasePage from "./base.page"

export default class PaymentReviewPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private get discountCode() {
        return this.page.locator('#discount-code');
    }

    private get applyDiscountCode() {
        return this.page.locator("button[value='Apply Discount']");
    }

    private get placeOrderBtn() {
        return this.page.locator("button[title='Place Order']");
    }

    async placeOrder() {
        await this.placeOrderBtn.waitFor({
            state: 'visible',
            timeout: 60000
        })
        await this.placeOrderBtn.click();
    }
}