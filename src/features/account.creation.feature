@All @NewAccount
Feature: Account Creation related scenarios

    Scenario Outline: Create a new account
        Given User opens home page
        When User navigates to create new customer account
        And User enters personal info: '<firstName>' and '<lastName>'
        And User enters sign-in info: '<email>' , '<password>' and '<confirmPassword>'
        Then User creates an account and confirms that it is successful

        Examples:
            | firstName | lastName | email                    | password  | confirmPassword |
            | Vithun    | V        | testmail1(random)@test.com | Test12345 | Test12345       |
