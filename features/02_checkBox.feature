Feature: Elements
  In check Box
  As an Admin
  I want to input data 
    
  Scenario: input data in check Box
  Given I navigate to website
  When I click Elements
  When  I click Check Box 
  When  I click home
  When I click desktop
  When I click expand
  Then I should see desktop
  When I click collapse
  Then I dont see desktop