Feature: Title Validation
  
  As a User
  I should see Title validations
  So that I know if I seelcted a Title

  Scenario Outline: Title
    Given I am on homepage
    When I select Get a Zopa Loan
    And I select Get my personalised rates
    And I enter Email address "email@domain.com"
    And I select Title "<Title>"
    And I select Calculate my rates
    Then I should not see Error "Please select your title"

    Examples: 
      | Title |
      | Mr    |
      | Ms    |
      | Miss  |
      | Mrs   |

  Scenario: No Title
    Given I am on homepage
    When I select Get a Zopa Loan
    And I select Get my personalised rates
    And I select Calculate my rates
    Then I should see Error "Please select your title"