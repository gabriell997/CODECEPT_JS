Feature: Elements
  In text box
  As an Admin
  I want to input data 
    
  Scenario: input data in Text Box
    Given I click menu Elements
    When I click Text Box
    When I fill Fullname
    When I fill Email
    When I fill Current Adress
    When I fill Permanent Adress
    When I click Submit button
    Then I should see the data