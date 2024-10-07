Feature: Sample Playwright and Cucumber test

Scenario: Open a webpage and check title
  Given I navigate to "https://example.com"
  Then the page title should be "Example Domain"
