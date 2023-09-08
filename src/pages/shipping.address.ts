import { Page } from "@playwright/test";
import BasePage from "./base.page";

export default class ShippingAddressPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private get emailAddress() {
        return this.page.locator("input[data-bind*='email']");
    }

    private get firstName() {
        return this.page.locator("[name='firstname']");
    }

    get lastName() {
        return this.page.locator("[name='lastname']");
    }

    private get company() {
        return this.page.locator("[name='company']");
    }

    private get streetLines() {
        return this.page.locator("input[name*='street']");
    }

    private get city() {
        return this.page.locator("[name='city']");
    }

    private get state() {
        return this.page.locator("[name='region_id']");
    }

    private get postcode() {
        return this.page.locator("[name='postcode']");
    }

    private get country() {
        return this.page.locator("[name='country_id']");
    }

    private get phoneNumber() {
        return this.page.locator("[name='telephone']");
    }

    private get flatRate() {
        return this.page.locator("//tr[contains(normalize-space(),'Flat Rate')]//input");
    }

    private get bestWay() {
        return this.page.locator("//tr[contains(normalize-space(),'Best Way')]//input");
    }

    private get nextBtn() {
        return this.page.locator("//button[.//span[text()='Next']]");
    }

    async enterPersonalInfo(personalInfo: Record<string, string>, timeOut: number = 15000) {
        await this.page.waitForLoadState('domcontentloaded', { timeout: timeOut });
        if (personalInfo['Email'])
            await this.emailAddress.fill(personalInfo['Email']);
        if (personalInfo['FirstName'])
            await this.firstName.fill(personalInfo['FirstName']);
        if (personalInfo['LastName'])
            await this.lastName.fill(personalInfo['LastName']);
        if (personalInfo['Company'])
            await this.company.fill(personalInfo['Company']);
    }

    async enterShippingAddress(shippingAddress: Record<string, string>, timeOut: number = 15000) {
        await this.page.waitForLoadState('domcontentloaded', { timeout: timeOut });
        if (shippingAddress['Street1'])
            await this.streetLines.nth(0).fill(shippingAddress['Street1']);
        if (shippingAddress['City'])
            await this.city.fill(shippingAddress['City']);
        if (shippingAddress['State'])
            await this.state.selectOption({ label: shippingAddress['State'] });
        if (shippingAddress['Zip'])
            await this.postcode.fill(shippingAddress['Zip']);
        if (shippingAddress['Country'])
            await this.country.selectOption({ label: shippingAddress['Country'] });
        if (shippingAddress['PhoneNumber'])
            await this.phoneNumber.fill(shippingAddress['PhoneNumber']);
    }

    async selectShippingMethodsAndProceedNext(method: string) {
        if (method == 'Flat Rate') {
            await this.flatRate.click();
        }
        if (method == 'Best Way') {
            await this.bestWay.click();
        }
        await this.nextBtn.click();
    }
}