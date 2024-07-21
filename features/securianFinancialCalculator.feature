Feature: Financial calculator from Securian

Scenario: Securian Financial calculator check

Given I am on the securian retirement calculator page

When User provide the current age
And User provide the age to retire

When User provide the annual income
And User provide the spouse annual income
And User provide the current retirement savings balance
And User provide the data for currently saving each year for retirement
And User provide the data for rate of increase in your savings each year

When User select the Social Security income
And User select the marital status
And User provide the data for Social Security override amount

When User will click on the Adjust default values
And User provide the data for other income will you have during retirement
And User provide the data for plan to depend on retirement income
And User select the option for post-retirement income increase with inflation
And User provide the data for final annual income do you want available in each year of your retirement

When User provide the data for Pre-retirement investment return
And User provide the data for Post-retirement investment return

When User click on the Save changes
And User click on the Calculate button

Then User can see the final report

