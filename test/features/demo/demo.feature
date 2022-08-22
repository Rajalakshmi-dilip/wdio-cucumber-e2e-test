Feature:Demo feature
  @demo 
    Scenario Outline: Run first demo feature
        Given Google page is opened
       When search with <searchitem>
        Then click on the first search result
       #Then URL should matched <ExpectedURL>

        Examples:
            | TestID     | searchitem | ExpectedURL           |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |