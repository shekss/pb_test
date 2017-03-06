Feature: API returns correct full name


  Scenario: API returns correct full name
    When I make a GET request to "/photobox"
    Then The response property "name" should be "PhotoBox"
