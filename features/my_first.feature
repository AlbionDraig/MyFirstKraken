Feature: Registarse en angular-6-registration-login-example

@user1 @web
Scenario: Rellenar formulario de registro
  Given I navigate to page "https://angular-6-registration-login-example.stackblitz.io/register"
  And I wait for 10 seconds
  When I click on Run this project
  And I wait for 5 seconds
  And I enter my first name "<FIRSTNAME>"
  And I wait for 5 seconds
  And I enter my last name "<LASTNAME>"
  And I wait for 5 seconds
  And I enter my user "<USER>"
  And I wait for 5 seconds
  And I enter my password "<PASSWORD>"
  And I wait for 5 seconds
  Then I click on Register
  And I validate the Registration successful