import {
    IWorldOptions,
    setDefaultTimeout,
    setWorldConstructor,
    World
} from "@cucumber/cucumber";
import {
    BrowserContext,
    Page
} from "@playwright/test";
import PageFactory from "./page.factory";

export interface ICustomWorld extends World {
    context?: BrowserContext;
    page?: Page;
    pageFactory?: PageFactory;
}

export class CustomWorld extends World implements ICustomWorld {
    constructor(options: IWorldOptions) {
        super(options)
    }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(30*1000)