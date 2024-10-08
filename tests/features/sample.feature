Feature: Verify home page

  Scenario: Open the home page and check title
    Given I navigate to the home page
    Then the page title should be correct
