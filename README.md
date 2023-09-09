# Playwright [TypeScript] - ReadyState Framework Using CucumberJS

## What it offers:

    - This is a boilerplate test framework, developed using Playwright, which gives detailed
    directions on: implementating pageobjects, writing feature files elequently using Gherkin
    for an eCommerce site, running tests and much more.

    - It aims to provide an idea on using various Playwright API in combination with CucumberJS framework to mimick different user 
    interactions
    
    - Tree View:
    .
    ├── LICENSE
    ├── README.md
    ├── cucumber.yml
    ├── package.json
    ├── playwright.config.ts
    ├── src
    │   ├── data
    │   │   └── config.yml
    │   ├── features
    │   │   ├── account.creation.feature
    │   │   ├── search.products.feature
    │   │   └── sign.in.feature
    │   ├── glue
    │   │   ├── account.creation.ts
    │   │   ├── add.to.cart.ts
    │   │   ├── core
    │   │   │   ├── common.hooks.ts
    │   │   │   ├── custom.world.ts
    │   │   │   └── page.factory.ts
    │   │   ├── home.ts
    │   │   ├── order.confirmation.ts
    │   │   ├── review.paymens.ts
    │   │   ├── search.products.ts
    │   │   ├── shipping.info.ts
    │   │   └── sign.in.ts
    │   ├── pages
    │   │   ├── add.to.cart.ts
    │   │   ├── base.page.ts
    │   │   ├── create.new.account.ts
    │   │   ├── customer.login.ts
    │   │   ├── home.ts
    │   │   ├── order.confirmation.ts
    │   │   ├── payment.review.ts
    │   │   ├── search.results.ts
    │   │   └── shipping.address.ts
    │   └── utils
    │       ├── common.util.ts
    │       └── pw-playground.ts
    └── tsconfig.json

## How to run:

    - Install nodejs and npm

    git clone https://github.com/5v1988/qa-playwright-ts.git && cd ./qa-playwright-ts

    npm install && npm run bdd-tests && npm run open-report

    —  On running these commands, the tests begin the execution and open up the report on completion


https://github.com/5v1988/qa-playwright-ts/assets/123231872/e77e1ce2-75f1-4471-a3e3-7f20b6b894cc


## What's next:

    - This is a standard boilplate framework and is continuously evolving.
