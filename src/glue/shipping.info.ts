import { DataTable, When } from "@cucumber/cucumber";
import { ICustomWorld } from "./util/custom.world";

When('User enters the following personal shipping info:', { timeout: 10000 },
  async function (this: ICustomWorld, dataTable: DataTable) {
    let data: Record<string, string> = dataTable.rowsHash();
    await this.pageFactory?.shippingAddress.enterPersonalInfo(data);
  });

When('User enters the following shipping address info:',
  async function (this: ICustomWorld, dataTable: DataTable) {
    let data: Record<string, string> = dataTable.rowsHash();
    await this.pageFactory?.shippingAddress.enterShippingAddress(data);
  });

When('User chooses the shipping method: {string} and proceeds to the next',
  async function (this: ICustomWorld, shippingMethod: string) {
    await this.pageFactory?.shippingAddress
      .selectShippingMethodsAndProceedNext(shippingMethod);
  });
