import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurianPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputCurrentAge() {
        return $('#current-age');
    }

    public get inputRetirementAge() {
        return $('#retirement-age');
    }

    public get inputCurrentIncome() {
        return $('#current-income');
    }

    public get inputSpouseIncome() {
        return $('#spouse-income');
    }

    public get inputCurrentTotalSavings() {
        return $('#current-total-savings');
    }

    public get inputCurrentAnnualSavings() {
        return $('#current-annual-savings');
    }

    public get inputSavingIncreaseRate() {
        return $('#savings-increase-rate');
    }

    public get selectSocialBenefits() {
        return $('#yes-social-benefits');
    }


    /**
    * overwrite specific options to adapt it to page object
    */
    public open() {
        return super.open('retirement-calculator.html');
    }
}

export default new SecurianPage();
