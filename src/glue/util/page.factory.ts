import { Page } from "@playwright/test";
import AddToCartPage from "../../pages/add.to.cart";
import NewAccountPage from "../../pages/create.new.account";
import LoginPage from "../../pages/customer.login";
import LandingPage from "../../pages/home";
import OrderConfirmationPage from "../../pages/order.confirmation";
import PaymentReviewPage from "../../pages/payment.review";
import SearchPage from "../../pages/search.results";
import ShippingAddressPage from "../../pages/shipping.address";

export default class PageFactory {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    get landingPage(): LandingPage {
        return new LandingPage(this.page);
    }

    get loginPage(): LoginPage {
        return new LoginPage(this.page);
    }

    get searchPage(): SearchPage {
        return new SearchPage(this.page);
    }

    get addToCart(): AddToCartPage {
        return new AddToCartPage(this.page);
    }

    get newAccountPage(): NewAccountPage {
        return new NewAccountPage(this.page);
    }

    get shippingAddress(): ShippingAddressPage {
        return new ShippingAddressPage(this.page);
    }

    get paymentReviewPage(): PaymentReviewPage {
        return new PaymentReviewPage(this.page);
    }

    get orderConfirmationPage(): OrderConfirmationPage {
        return new OrderConfirmationPage(this.page);
    }

}