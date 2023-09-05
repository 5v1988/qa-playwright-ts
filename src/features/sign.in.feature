@All @SignIn
Feature: Sign In scenarios
    Scenario Outline: Login using valid creds
        Given User opens home page
        When User navigates to sign-in page
        And User logons using credentials: '<email>' and '<password>'
        Then User verifies that the login is successful

        Examples:
            | email                  | password  |
            | ts.playwright@test.com | Test1234# |