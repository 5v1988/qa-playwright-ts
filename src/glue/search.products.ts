import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ICustomWorld } from "./core/custom.world";

When('User searches for the product: {string}',
    async function (this: ICustomWorld, productName: string) {
        await this.pageFactory?.landingPage
            .searchProduct(productName);
    });

Then('User verifies that the product: {string} displays in the results',
    async function (this: ICustomWorld, productName: string) {
        let names: string[] = await this.pageFactory?.searchPage.getAllProductName()!;
        expect(names).toContain(productName)
    });

When('User chooses the product: {string} displays in the results',
    async function (this: ICustomWorld, productName: string) {
        await this.pageFactory?.searchPage.chooseProduct(productName);
    });