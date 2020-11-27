Feature: Viewing Components

Scenario: Landing on the home page
  When I land on the home page
  Then I can see a list of compenents

Scenario: Viewing an atom
  Given I have landed on the homepage
  When I click on an atom
  Then I can see the atom on the screen

Scenario: Viewing a molecule
  Given I have landed on the homepage
  When I click on a molecule
  Then I can see the molecule on the screen

Scenario: Viewing an organism
  Given I have landed on the homepage
  When I click on an organism
  Then I can see the organism on the screen