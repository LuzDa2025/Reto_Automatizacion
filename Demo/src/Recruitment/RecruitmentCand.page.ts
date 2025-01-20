import {Page, PageContext} from "@testing/wdio-page-objects";

const select = {
    JobTitle :`div[class="oxd-select-text oxd-select-text--active"]`,
    Vacancy :`div[class="oxd-select-text oxd-select-text--focus"]`,
}

@PageContext({
    path: '/web/index.php/recruitment/viewCandidates',
    wrapper: `[id="app"]`, //Padre  o nodo principal
})
export class RecruitmentCandPage extends Page {

    async clickFinancialAnalyst(){
        await (await $(select.JobTitle)).waitForDisplayed({timeout: 12000 });
        await (await $(select.JobTitle)).isExisting();
        await (await $(select.JobTitle)).click();
    }
    async selectFinancialAnalyst(){
        await (await $(select.JobTitle)).waitForDisplayed({timeout: 20000 });
        await (await $(select.JobTitle)).isExisting();
        await (await $(select.JobTitle)).addValue('Financial Analyst');
    }
    async clickJuniorAccount(){
        await (await $(select.Vacancy)).waitForDisplayed({timeout: 12000 });
        await (await $(select.Vacancy)).isExisting();
        await (await $(select.Vacancy)).click();
    }
    async selectJuniorAccount(){
        await (await $(select.Vacancy)).waitForDisplayed({timeout: 20000 });
        await (await $(select.Vacancy)).isExisting();
        await (await $(select.Vacancy)).addValue('Junior Account Assistant');
    }
}
