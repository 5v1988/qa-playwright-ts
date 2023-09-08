import { DataTable, When } from "@cucumber/cucumber";
import { CustomWorld } from "./core/custom.world";

When('User enters the following personal shipping info:', { timeout: 10000 },
  async function (this: CustomWorld, dataTable: DataTable) {
    let data: Record<string, string> = dataTable.rowsHash();
    await this.pages.shippingAddress.enterPersonalInfo(data, this.parameters.timeOut);
  });

When('User enters the following shipping address info:',
  async function (this: CustomWorld, dataTable: DataTable) {
    let data: Record<string, string> = dataTable.rowsHash();
    await this.pages.shippingAddress.enterShippingAddress(data, this.parameters.timeOut);
  });

When('User chooses the shipping method: {string} and proceeds to the next',
  async function (this: CustomWorld, shippingMethod: string) {
    await this.pages.shippingAddress
      .selectShippingMethodsAndProceedNext(shippingMethod);
  });
