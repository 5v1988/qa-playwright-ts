@All @Search
Feature: Search products
    @Flaky
    Scenario Outline: Search product and place an order
        Given User opens home page
        And User searches for the product: '<ProductName>'
        And User verifies that the product: '<ProductName>' displays in the results
        When User chooses the product: '<ProductName>' displays in the results
        And User adds choosen product to the cart
        And User proceeds to checkout from the cart
        And User enters the following personal shipping info:
            | Email     | e@e.com |
            | FirstName | Veera   |
            | LastName  | V       |
        And User enters the following shipping address info:
            | Street1        | 2048 S Voss Rd |
            | City           | Houston        |
            | State          | Texas          |
            | Zip            | 77057          |
            | Country        | United States  |
            | PhoneNumber    | 8019881988     |
            | ShippingMethod | Best Way       |
        And User chooses the shipping method: 'Best Way' and proceeds to the next
        Then User reviews payments and places order
        And User verifies that order confirmation: '<Message>' is displayed

        Examples:
            | ProductName     | Message                      |
            | Driven Backpack | Thank you for your purchase! |