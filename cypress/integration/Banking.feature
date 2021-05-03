Feature: Banking Feature

  I want to validate Banking Scenario

  Background:
    Given I navigate to the website

  Scenario: Login as Bank Manager
#    Given I navigate to the website
    When I click on Bank Manager Login Button
    And validate the page title

  Scenario: Add a Customer
#    Given I navigate to the website
    When I click on Bank Manager Login Button
    And validate the page title
    And I click on Add Customer Button
    And I entered
      | firstname | lastname  | postcode |
      | Dmitry    | Shimansky | 220019   |
    And I click on submit button
    And I validate the alert text

  Scenario: Opening Account
#    Given I navigate to the website
    When I click on Bank Manager Login Button
    And validate the page title
