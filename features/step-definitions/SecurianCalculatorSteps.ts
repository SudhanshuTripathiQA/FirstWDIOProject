import { Given, When, Then} from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

const testdata = require("../testdata/securedata")

import SecurianPage from '../pageobjects/securianCalculator.page';

const pages = {
    securianPageObject: SecurianPage
}


Given(/^I am on the securian retirement calculator page$/, async () => {
	 await SecurianPage.open();
});

When(/^User provide the current age$/, () => {
    SecurianPage.inputCurrentAge.setValue(testdata.current_Age);
});

When(/^User provide the age to retire$/, () => {
	 
});

When(/^User provide the annual income$/, () => {
	 
});

When(/^User provide the spouse annual income$/, () => {
	 
});

When(/^User provide the current retirement savings balance$/, () => {
	 
});

When(/^User provide the data for currently saving each year for retirement$/, () => {
	 
});

When(/^User provide the data for rate of increase in your savings each year$/, () => {
	 
});

When(/^User select the Social Security income$/, () => {
	 
});

When(/^User select the marital status$/, () => {
	 
});

When(/^User provide the data for Social Security override amount$/, () => {
	 
});

When(/^User will click on the Adjust default values$/, () => {
	 
});

When(/^User provide the data for other income will you have during retirement$/, () => {
	 
});

When(/^User provide the data for plan to depend on retirement income$/, () => {
	 
});

When(/^User select the option for post-retirement income increase with inflation$/, () => {
	 
});

When(/^User provide the data for final annual income do you want available in each year of your retirement$/, () => {
	 
});

When(/^User provide the data for Pre-retirement investment return$/, () => {
	 
});

When(/^User provide the data for Post-retirement investment return$/, () => {
	 
});

When(/^User click on the Save changes$/, () => {
	 
});

When(/^User click on the Calculate button$/, () => {
	 
});

Then(/^User can see the final report$/, () => {
	 
});
