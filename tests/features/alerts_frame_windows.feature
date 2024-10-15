Feature: Navigate to Alerts, Frame & Windows page

  Scenario: User navigates to the Alerts, Frame & Windows section
    Given the user is on the DemoQA home page
    When the user navigates to "Alerts, Frame & Windows"
    Then the user clicks on Browser Windows
    When the user clicks on New Tab
    Then the user shold see the text "This is a sample page"