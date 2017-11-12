Feature: Email Validation
  
  As a User
  I should see email validations
  So that I know if I entered valid email address

  Scenario Outline: Invalid Email validation
    Given I am on homepage
    When I select Get a Zopa Loan
    And I select Get my personalised rates
    And I enter Email address "<Email Address>"
    And I select Calculate my rates
    Then I should see Error "Please enter a valid email address"

    Examples: 
      | Email Address                 |
      | mahesh                        |
      | #@%^%#$@#$@#.com              |
      | @domain.com                   |
      | Joe Smith <email@domain.com>  |
      | email1.domain.com             |
      | email2@domain@domain.com      |
      | .email3@domain.com            |
      | email.@domain.com             |
      | email..email@domain.com       |
      | email4@domain.com (Joe Smith) |
      | email5@domain                 |
      | email6@-domain.com            |
      | email7@domain.web             |
      | email8@111.222.333.44444      |
      | email9@domain..com            |

  Scenario Outline: Valid Email validation
    Given I am on homepage
    When I select Get a Zopa Loan
    And I select Get my personalised rates
    And I enter Email address "<Email Address>"
    And I select Calculate my rates
    Then I should not see Error "Please enter a valid email address"

    Examples: 
      | Email Address                 |
      | email10@domain.com            |
      | firstname.lastname@domain.com |
      | email11@subdomain.domain.com  |
      | firstname+lastname@domain.com |
      | email12@123.123.123.123       |
      | email13@[123.123.123.123]     |
      | 1234567890@domain.com         |
      | email15@domain-one.com        |
      | _______@domain.com            |
      | email16@domain.london         |
      | email17@domain.co.jp          |
      | firstname-lastname@domain.com |
