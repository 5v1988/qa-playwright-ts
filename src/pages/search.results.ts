import { Page } from "@playwright/test";
import BasePage from "./base.page";

export default class SearchPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get productGrid() {
        return this.page.locator('div.product-item-info');
    }

    get productNames() {
        return this.page.locator('a.product-item-link');
    }


    async getAllProductName() {
        await this.page.waitForLoadState('domcontentloaded');
        let products = await this.productNames.allTextContents();
        products = products.map(product => product.trim())
        return products;
    }

    async chooseProduct(productToChoose: string) {
        (await this.productNames.all()).forEach(async (productName) => {
            if (((await productName.textContent())?.trim()) == productToChoose) {
                await productName.click();
                return;
            }
        })
    }
}