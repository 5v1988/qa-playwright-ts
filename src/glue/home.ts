import { Given } from "@cucumber/cucumber";
import { CustomWorld } from "./core/custom.world";

Given('User opens home page', async function (this: CustomWorld) {
    await this.pages.landingPage
        .openUrl(this.parameters.appUrl);
});
