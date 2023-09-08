import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "./core/custom.world";

When('User searches for the product: {string}',
    async function (this: CustomWorld, productName: string) {
        await this.pages.landingPage
            .searchProduct(productName);
    });

Then('User verifies that the product: {string} displays in the results',
    async function (this: CustomWorld, productName: string) {
        let names: string[] = await this.pages.searchPage.getAllProductName()!;
        expect(names).toContain(productName)
    });

When('User chooses the product: {string} displays in the results',
    async function (this: CustomWorld, productName: string) {
        await this.pages.searchPage.chooseProduct(productName);
    });