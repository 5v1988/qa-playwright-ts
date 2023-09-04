//import Home from '../pages/Home';
import {
    chromium,
    Browser,
    Page,
    devices,
    BrowserContext
} from '@playwright/test';
import CustomerLogin from '../pages/customer.login';

//let result: string = new Home().searchTextBox;
//console.log(result);

(async () => {
    let browser: Browser = await chromium.launch({headless: false})
    let context: BrowserContext = await browser.newContext(devices['Desktop Chrome'])
    let page: Page = await context.newPage();
    let page1: Page = await context.newPage();
    //let customerLogin = new CustomerLogin();
    await page.goto('https://magento.softwaretestingboard.com/')
    await page.close();
    await page1.goto('https://magento.softwaretestingboard.com/')
    await page1.close();
    //await page.getByRole('link', {name: 'Sign In'}).click()
    //await customerLogin.login('roni_cost@example.com', 'roni_cost3@example.com')

    // await page.locator('css=#email').fill('roni_cost@example.com');
    // await page.locator('css=#pass').fill('roni_cost3@example.com');
    // await page.locator('button.login').click();
    await context.close()
    await browser.close();
})();


//console.log(result);